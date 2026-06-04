import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

import { styles } from './style'
import { colors } from '@/theme/colors'

type Props = TextInputProps & {
    label: string
}

export function Input({label, ...rest}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[500]}
        {...rest}
    />
    </View>
  )
}