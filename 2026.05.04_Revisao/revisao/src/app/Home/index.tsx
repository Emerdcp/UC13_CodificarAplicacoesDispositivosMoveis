import { Text, View, StyleSheet } from 'react-native';
import Button from "@/components/Button"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Olá, mundo!!!
      </Text>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: '#000',
  },
});

