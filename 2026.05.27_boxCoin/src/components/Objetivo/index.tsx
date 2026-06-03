import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { styles } from './style'
import { MaterialIcons } from '@expo/vector-icons'

export function Objetivo(){
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.nome} numberOfLines={1}>
                    Comprar um pão de queijo
                </Text>
                <Text style={styles.status}>
                    25% - R$ 250,00 de R$ 1.000,00
                </Text>
            </View>
            <MaterialIcons name='chevron-right' size={20} />
        </TouchableOpacity>
    )
}


