import { View, Text, } from 'react-native'
import React from 'react'

import Input, { CurrencyInputProps } from 'react-native-currency-input'


import { styles } from './style'
import { colors } from '@/theme/colors'

type Props = CurrencyInputProps & {
    label: string
}

export function InputCurrency({label, ...rest}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        // placeholderTextColor={colors.gray[500]}
        prefix='R$ '
        separator=','
        delimiter='.'
        precision={2}
        minValue={0}
        {...rest}
    />
    </View>
  )
}