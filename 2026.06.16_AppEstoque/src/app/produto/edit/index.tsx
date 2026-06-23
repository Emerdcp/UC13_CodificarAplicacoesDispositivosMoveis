import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { useProductDatabase, ProductResponse, } from "@/database/useProductDatabase";
import { Alert } from "react-native";

export default function Edit() {

  const { id } = useLocalSearchParams();
  const router = useRouter();
  const productDatabase = useProductDatabase();

  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  async function handleSave() {
    try {
      await productDatabase.update({
        id: Number(id),
        image_url: imageUrl,
        title,
        description,
        quantity: Number(quantity),
        price: Number(price),
      });

      Alert.alert(
        "Sucesso",
        "Produto atualizado!"
      );
      router.replace("/");
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Não foi possível atualizar."
      );
    }
  }

  useEffect(() => {
    async function loadProduct() {
      try {
        const result =
          await productDatabase.findById(
            Number(id)
          );
        if (!result) return;
        setImageUrl(result.image_url);
        setTitle(result.title);
        setDescription(result.description);
        setQuantity(
          String(result.quantity)
        );
        setPrice(
          String(result.price)
        );
      } catch (error) {
        console.log(error);
      }
    }
    loadProduct();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#3d44cd"
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Editar Produto
        </Text>
      </View>

      <TextInput
        placeholder="URL da imagem"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={styles.input}
      />

      <TextInput
        placeholder="Nome do produto"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={[
          styles.input,
          styles.textArea,
        ]}
        multiline
      />

      <TextInput
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity}
        style={styles.input}
      />

      <TextInput
        placeholder="Valor Unitário"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Salvar Alterações
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}