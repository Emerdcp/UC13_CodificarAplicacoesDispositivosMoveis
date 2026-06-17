import { TextInput } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchBar({
  value,
  onChangeText,
}: Props) {
  return (
    <TextInput
      placeholder="Pesquisar produto..."
      value={value}
      onChangeText={onChangeText}
      style={{
        backgroundColor: "#FFF",
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 50,
        marginVertical: 16,
      }}
    />
  );
}