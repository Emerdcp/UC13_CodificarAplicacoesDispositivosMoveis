import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  quantity: number;
  onPress: () => void;
};

export function ProductCard({
  title,
  quantity,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Image
        source={{
          uri: "https://recreio.com.br/wp-content/uploads/2024/02/relampago-mcqueen_capa.jpg",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.quantity}>
        Qtd: {quantity}
      </Text>
    </TouchableOpacity>
  );
}