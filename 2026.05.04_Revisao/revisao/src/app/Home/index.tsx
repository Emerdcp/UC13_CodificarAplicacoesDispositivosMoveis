import { Text, View, StyleSheet } from 'react-native';
import Button from "@/components/Button"
import Input from '@/components/Imput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá, mundo!!!</Text>
      <Input placeholder='O Meu primeiro input'/>
      <Input placeholder='Este é meu segundo input'/>
      <Button text="Click Aqui!!!" idButton={23} isAtivado  activeOpacity={0.1}/>
      <Button text="O mesmo button" idButton={76} isAtivado={false} activeOpacity={0.4}/>
      <Button text="5" idButton={67} isAtivado={true} activeOpacity={0.8}/>
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

