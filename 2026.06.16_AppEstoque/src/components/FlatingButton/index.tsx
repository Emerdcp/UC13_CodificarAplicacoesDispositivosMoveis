import {
  TouchableOpacity,
  Text,
} from "react-native";

type Props = {
  onPress: () => void;
};

export function FloatingButton({
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#3d44cd",

        height: 60,

        borderRadius: 30,

        justifyContent: "center",

        alignItems: "center",

        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Adicionar
      </Text>
    </TouchableOpacity>
  );
}