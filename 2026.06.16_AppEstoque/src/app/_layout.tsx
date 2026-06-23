import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function Layout() {

  return (
    <SQLiteProvider
      databaseName="stockbox.db"
    >
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SQLiteProvider>
  );
}