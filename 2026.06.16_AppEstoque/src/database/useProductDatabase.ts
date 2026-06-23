import { useSQLiteContext } from "expo-sqlite";

export type ProductCreate = {
    image_url: string;
    title: string;
    description: string;
    quantity: number;
    price: number;
};

export type ProductUpdate = {
    id: number;
    image_url: string;
    title: string;
    description: string;
    quantity: number;
    price: number;
};

export type ProductResponse = {
    id: number;
    image_url: string;
    title: string;
    description: string;
    quantity: number;
    price: number;
    created_at: string;
};


export function useProductDatabase() {
    const database = useSQLiteContext();
    async function create(
        data: ProductCreate
    ) {

        await database.runAsync(
            `
            INSERT INTO products (
                image_url,
                title,
                description,
                quantity,
                price
            )
            VALUES (?, ?, ?, ?, ?)
            `,
            [
                data.image_url,
                data.title,
                data.description,
                data.quantity,
                data.price,
            ]
        );
    }

    async function findAll() {
        const result =
            await database.getAllAsync<ProductResponse>(
                `
            SELECT *
            FROM products
            ORDER BY id DESC
            `
            );
        return result;
    }

    async function remove(id: number) {

        await database.runAsync(
            `DELETE FROM products WHERE id = ?`,
            [id]
        );
    }

    async function findById(id: number) {

        const result =
            await database.getFirstAsync<ProductResponse>(
                `
            SELECT *
            FROM products
            WHERE id = ?
            `,
                [id]
            );

        return result;
    }

    async function update(
        data: ProductUpdate
    ) {

        await database.runAsync(
            `
        UPDATE products
        SET
            image_url = ?,
            title = ?,
            description = ?,
            quantity = ?,
            price = ?
        WHERE id = ?
        `,
            [
                data.image_url,
                data.title,
                data.description,
                data.quantity,
                data.price,
                data.id,
            ]
        );
    }

    return {
        create,
        findAll,
        findById,
        update,
        remove,
    };
}
