import { StyleSheet, View } from 'react-native'
import React from 'react'

import Button from '@/components/Button'

import{
  requestPermissaoNotificacao,
  envioImediatoNotivicacao,
  envioDelayNotivicacao,
  cancelarTodasNotificacoes,
  envioSomNotivicacao,
  envioVibraNotivicacao
} from '@/services/notifications'

import {
  vibracaoSimples,
  vibracaoLonga,
  vibracaoRepeat,
  vibracaoCancelar
} from '@/services/vibration'

export default function App() {
  async function fnExecutar(acao: () => Promise<void>) {
    const permitido = await requestPermissaoNotificacao()

    if(!permitido) {
      alert("Permissão Negada.")
      return;
    }    

    await acao()
  }


  return (
    <View style={styles. container}>
      {/* notifica assim que clica no buttun */}
      <Button title='Notificações Imediatas' onPress={()=> fnExecutar(envioImediatoNotivicacao)}/>
      <Button title='Após 5 segundos' onPress={()=> fnExecutar(envioDelayNotivicacao)}/>
      <Button title='Notificação com Som' onPress={()=> fnExecutar(envioSomNotivicacao)}/>
      <Button title='Cancelar Notificações' onPress={()=> fnExecutar(cancelarTodasNotificacoes)}/>
      <Button title='Vibra Direto' onPress={()=> fnExecutar(envioVibraNotivicacao)}/>
      <Button title='Vibração Simples' onPress={vibracaoSimples}/>
      <Button title='Vibração Longa' onPress={vibracaoLonga}/>
      <Button title='Vibração Repetida' onPress={vibracaoRepeat}/>
      <Button title='Vibração Cancelar' onPress={vibracaoCancelar}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
    paddingHorizontal: 20,
  }
})