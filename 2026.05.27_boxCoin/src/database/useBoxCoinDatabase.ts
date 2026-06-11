import { useSQLiteContext } from "expo-sqlite";

export type BoxCoinCreate = {
    name: string,
    amount: number
}

export type BoxCoinResponse={
    id: number,
    name: string,
    amount: number,
    current: number,
    percentage: number,
    created_at: Date,
    updated_at: Date
}

export function useBoxCoinDatabase(){
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

    function ListBySavedValue(){
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

    return{
        create,
        ListBySavedValue
    }
}




