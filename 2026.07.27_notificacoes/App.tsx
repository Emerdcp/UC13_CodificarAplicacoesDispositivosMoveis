import { StyleSheet, View } from 'react-native'
import React from 'react'

import Button from '@/components/Button'

export default function App() {
  return (
    <View style={styles. container}>
      <Button title='Primeiro button' />
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