import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#2E8B57",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
    elevation: 4,
  },

  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  }
});