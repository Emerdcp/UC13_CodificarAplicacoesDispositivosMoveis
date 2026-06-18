import { Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { ProductCard } from "../components/ProductCard";
import { FloatingButton } from "../components/FlatingButton";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { styles } from "./styles";
import { View } from "react-native";
import { ProductModal } from "../components/ProductModal";

type Product = {
  id: number;
  title: string;
  quantity: number;
};

export default function Home() {
  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Stock Box
      </Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.summaryCard}>
        <Text style={styles.infoText}>
          Total Produtos: {products.length}
        </Text>

        <Text style={styles.infoText}>
          Valor Estoque: R$ 1.250,00
        </Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            quantity={item.quantity}
            onPress={() => {
              console.log("CARD CLICADO");

              setSelectedProduct(item);
              setModalVisible(true);
            }}
          />

        )}
      />

      <ProductModal
        visible={modalVisible}
        product={selectedProduct}
        onClose={() =>
          setModalVisible(false)
        }
      />

      <FloatingButton
        onPress={() =>
          router.push("/produto/create")
        }
      />
    </SafeAreaView>
  );
}