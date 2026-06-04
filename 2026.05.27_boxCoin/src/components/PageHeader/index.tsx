import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

import { styles } from './style'
import { colors } from '@/theme/colors'


type Props = {
    titulo: string,
    subtitulo: string,
    rightButton?: {
        onPress: () => void,
        icon: keyof typeof MaterialIcons.glyphMap
    }
}

export function PageHeader({ titulo, subtitulo, rightButton }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.8} onPress={router.back}>
                    <MaterialIcons name='arrow-back' size={32} color={colors.black} />
                </TouchableOpacity>

                {rightButton &&
                    <TouchableOpacity activeOpacity={0.8} onPress={rightButton?.onPress}>
                        <MaterialIcons name={rightButton?.icon} size={24} color={colors.gray[500]} />
                    </TouchableOpacity>
                }

            </View>

            <Text style={styles.titulo}>{titulo}</Text>


            {subtitulo &&
                <Text style={styles.subtitulo}>{subtitulo}</Text>
            }

        </View>
    )
}