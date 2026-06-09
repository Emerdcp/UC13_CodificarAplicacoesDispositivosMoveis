import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { Label } from "expo-router";

export const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    label: {
        fontSize: 12,
        color: colors.gray[500],
        marginBottom: 5
    },
    status: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    value:{
        fontSize: 18,
        color: colors.black,
        flex: 1        
    },
    meta: {
        fontSize: 14,
        color: colors.gray[500]
    },
    porcentagem: {
        fontSize: 14,
        color: colors.blue[500]
    },
    progresso: {
        height: 5,
        marginTop: 16,
        width: '100%',
        backgroundColor: colors.gray[500],
        borderRadius: 5,
        overflow: 'hidden'       
    },
    progressoAtual: {
        height: 5,
        backgroundColor: colors.blue[500]
    },
})