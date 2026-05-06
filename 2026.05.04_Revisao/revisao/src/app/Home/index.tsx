import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

import Button from "@/components/Button"
import Input from '@/components/Imput';


export default function App() {
  const [contador, setContador] = useState(0)

  function fnAumentarContador(numero: number){
    setContador(contador + numero)
  }

  function fnZerarContador(){
    setContador(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá, mundo!!!</Text>
      <Input placeholder='O Meu primeiro input' 
        value={contador.toString()}/>
      <Input placeholder='Este é meu segundo input'/>
      {/* <Button text="Click Aqui!!!" idButton={23} isAtivado  activeOpacity={0.1}/>
      <Button text="O mesmo button" idButton={76} isAtivado={false} activeOpacity={0.4}/>
      <Button text="5" idButton={67} isAtivado={true} activeOpacity={0.8}/> */}
      
      <Button text="+1" isAtivado={true} activeOpacity={0.4} onPress={()=> fnAumentarContador(1)}/>
      <Button text="+3" isAtivado={false} activeOpacity={0.4} onPress={()=> fnAumentarContador(3)}/>
      <Button text="-1" isAtivado={true} activeOpacity={0.4} onPress={()=> fnAumentarContador(-1)}/>
      <Button text="Zerar" isAtivado={false} activeOpacity={0.4} onPress={()=> fnZerarContador()}/>
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

