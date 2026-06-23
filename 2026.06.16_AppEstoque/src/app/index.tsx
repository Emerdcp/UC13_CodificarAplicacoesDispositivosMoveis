import { Text, FlatList, SafeAreaView, } from "react-native";
import { router } from "expo-router";
import { ProductCard } from "../components/ProductCard";
import { FloatingButton } from "../components/FlatingButton";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { styles } from "./styles";
import { View } from "react-native";
import { ProductModal } from "../components/ProductModal";
import { useMigrateDatabase } from "@/database/migrate";
import { useEffect } from "react";
import { useProductDatabase, ProductResponse, } from "@/database/useProductDatabase";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const totalEstoque = products.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
  const { initializeDatabase } = useMigrateDatabase();
  const productDatabase = useProductDatabase();

  const filteredProducts = products.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  async function loadProducts() {
    try {
      const result =
        await productDatabase.findAll();
      console.log(
        "PRODUTOS DO BANCO:",
        result
      );
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    async function loadDatabase() {
      await initializeDatabase();
      await loadProducts();
    }
    loadDatabase();
  }, []);

  useFocusEffect(
    useCallback(() => {

      loadProducts();

    }, [])
  );

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
          Valor Estoque: R$ {totalEstoque.toFixed(2)}
        </Text>
      </View>

      <FlatList
        // data={products}
        data={filteredProducts}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        renderItem={({ item }) => (
          <ProductCard
            imageUrl={item.image_url}
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
        onDeleteSuccess={() => {
          loadProducts();
        }}
      />

      <FloatingButton
        onPress={() =>
          router.push("/produto/create")
        }
      />
    </SafeAreaView>
  );
}