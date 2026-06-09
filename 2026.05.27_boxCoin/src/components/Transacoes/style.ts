import { colors } from '@/theme/colors'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 72,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    info: {
        flex: 1,
    },
    value: {
        fontSize: 14,
        color: colors.black,
    },
    descricao: {
        fontSize: 12,
        color: colors.gray[500]

    }
})