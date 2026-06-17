import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/theme/colors";

export default function Create() {

    const router = useRouter();

    function handleSave() {
        console.log("Salvar");
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

            {/* 
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.push("/")}
            >
                <Ionicons
                    name="arrow-back"
                    size={28}
                    color="#3d44cd"
                />
            </TouchableOpacity> */}


            {/* <TouchableOpacity
  style={{
    backgroundColor: "red",
    padding: 20,
    marginTop: 20,
  }}
  onPress={() => {
    console.log("CLICOU");
  }}
>
  <Text>TESTE</Text>
</TouchableOpacity> */}

            <TextInput
                placeholder="URL da imagem"
                style={styles.input}
            />

            <TextInput
                placeholder="Nome do produto"
                style={styles.input}
            />

            <TextInput
                placeholder="Descrição"
                multiline
                style={[
                    styles.input,
                    styles.textArea,
                ]}
            />

            <TextInput
                placeholder="Quantidade"
                keyboardType="numeric"
                style={styles.input}
            />

            <TextInput
                placeholder="Valor Unitário"
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