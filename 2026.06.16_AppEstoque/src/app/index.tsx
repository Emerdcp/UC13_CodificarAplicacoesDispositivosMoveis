import { Text, FlatList, SafeAreaView, } from "react-native";
import { router } from "expo-router";
import { ProductCard } from "../components/ProductCard";
import { FloatingButton } from "../components/FlatingButton";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      title: "Mouse",
      quantity: 10,
    },
    {
      id: 2,
      title: "Teclado",
      quantity: 5,
    },
    {
      id: 3,
      title: "Monitor",
      quantity: 2,
    },
    {
      id: 4,
      title: "Notebook",
      quantity: 8,
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
      }}
    >

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Stock Box
      </Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <Text>
        Total Produtos: {products.length}
      </Text>

      <Text>
        Valor Estoque: R$ 1.250,00
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) =>
          String(item.id)
        }
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            quantity={item.quantity}
          />
        )}
      />

      <FloatingButton
        onPress={() =>
          router.push("/produto/create")
        }
      />
    </SafeAreaView>
  );
}