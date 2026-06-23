import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useProductDatabase } from "@/database/useProductDatabase";

export default function Create() {

    const router = useRouter();
    const productDatabase = useProductDatabase();
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    async function handleSelectImage() {
        const result =
            await ImagePicker.launchImageLibraryAsync({
                mediaTypes:
                    ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
        if (!result.canceled) {
            setImageUrl(
                result.assets[0].uri
            );
        }
    }

    async function handleSave() {
        try {
            await productDatabase.create({
                image_url: imageUrl,
                title,
                description,
                quantity: Number(quantity),
                price: Number(price),
            });
            Alert.alert(
                "Sucesso",
                "Produto cadastrado!"
            );
            router.replace("/");
        } catch (error) {
            console.log(error);
            Alert.alert(
                "Erro",
                "Não foi possível salvar."
            );
        }
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => {
                        console.log("VOLTANDO");
                        router.push("/");
                    }}
                >
                    <Ionicons
                        name="arrow-back"
                        size={28}
                        color={colors.blue[500]}
                    />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Novo Produto
                </Text>

            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: "#3d44cd",
                    height: 50,
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                }}
                onPress={handleSelectImage}
            >
                <Text style={styles.buttonText}>
                    Selecionar Imagem
                </Text>
            </TouchableOpacity>

            {
                imageUrl !== "" && (
                    <Image
                        source={{
                            uri: imageUrl,
                        }}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 12,
                            alignSelf: "center",
                            marginBottom: 20,
                        }}
                    />
                )
            }

            <TextInput
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
                multiline
                style={[
                    styles.input,
                    styles.textArea,
                ]}
            />

            <TextInput
                placeholder="Quantidade"
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
                style={styles.input}
            />

            <TextInput
                placeholder="Valor Unitário"
                value={price}
                onChangeText={setPrice}
                keyboardType="decimal-pad"
                style={styles.input}
            />

            <TouchableOpacity
                onPress={handleSave}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Salvar Produto
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}