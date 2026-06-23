import { useSQLiteContext } from "expo-sqlite";

export function useMigrateDatabase() {
    const database = useSQLiteContext();
    async function initializeDatabase() {
        await database.execAsync(`
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image_url TEXT,
                title TEXT NOT NULL,
                description TEXT,
                quantity INTEGER NOT NULL,
                price REAL NOT NULL,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("Tabela products criada.");
    }
    return {
        initializeDatabase,
    };
}