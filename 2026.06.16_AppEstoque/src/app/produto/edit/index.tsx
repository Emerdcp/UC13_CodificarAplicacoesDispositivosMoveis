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

export default function Edit() {

  const { id } = useLocalSearchParams();
  const router = useRouter();

  function handleSave() {
    console.log("Salvar produto", id);
  }

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
        style={styles.input}
      />

      <TextInput
        placeholder="Nome do produto"
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        style={[
          styles.input,
          styles.textArea,
        ]}
        multiline
      />

      <TextInput
        placeholder="Quantidade"
        style={styles.input}
      />

      <TextInput
        placeholder="Valor Unitário"
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