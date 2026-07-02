import { useSQLiteContext } from "expo-sqlite";

export type BoxCoinCreate = {
    name: string,
    amount: number
}

export type BoxCoinResponse = {
    id: number,
    name: string,
    amount: number,
    current: number,
    percentage: number,
    created_at: Date,
    updated_at: Date
}

export type BoxCoinUpdate = BoxCoinCreate & {
    id: number
}

export function useBoxCoinDatabase() {
    const database = useSQLiteContext()

    async function create(data: BoxCoinCreate) {
        const conn = await database.prepareAsync(
            "INSERT INTO targets (name, amount) VALUES ($name, $amount)"
        )
        await conn.executeAsync({
            $name: data.name,
            $amount: data.amount
        })
    }

    function ListBySavedValue() {
        return database.getAllAsync<BoxCoinResponse>(`
            SELECT
                targets.id,
                targets.name,
                targets.amount,
                COALESCE(SUM(transactions.amount), 0) AS current, 
                COALESCE((SUM(transactions.amount)/targets.amount) * 100, 0) AS percentage,
                targets.created_at,
                targets.updated_at

            FROM targets

            LEFT JOIN transactions ON transactions.target_id = targets.id

            GROUP BY 
                targets.id,
                targets.name,
                targets.amount

            ORDER BY current DESC
            `
        )
    }

    function show(id: number) {
        return database.getFirstSync<BoxCoinResponse>(`
                SELECT
                    targets.id,
                    targets.name,
                    targets.amount,
                    COALESCE(SUM(transactions.amount), 0) AS current, 
                    COALESCE((SUM(transactions.amount)/targets.amount) * 100, 0) AS percentage,
                    targets.created_at,
                    targets.updated_at

                FROM targets
                LEFT JOIN transactions ON transactions.target_id = targets.id
                WHERE targets.id = ${id}
            `)
    }

    async function update(data: BoxCoinUpdate) {
        const conn = await database.prepareAsync(
            `UPDATE 
                targets 
            SET 
                name = $name, 
                amount = $amount, 
                updated_at = CURRENT_TIMESTAMP
                WHERE id = $id
                `)
        await conn.executeAsync({
            $name: data.name,
            $amount: data.amount,
            $id: data.id
        })
    }

    async function remove(id: number) {
        await database.runAsync("DELETE FROM targets WHERE id = ?", id)
    }

    return {
        create,
        ListBySavedValue,
        show,
        update, 
        remove
    }
}




