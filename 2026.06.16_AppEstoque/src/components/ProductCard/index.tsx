import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles";

type Props = {
  imageUrl: string;
  title: string;
  quantity: number;
  onPress: () => void;
};

export function ProductCard({
  imageUrl,
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
          uri: imageUrl,
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