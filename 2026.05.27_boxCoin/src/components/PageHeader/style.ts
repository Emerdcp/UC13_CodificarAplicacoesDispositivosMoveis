import { StyleSheet } from "react-native";
import { Color } from "expo-router";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 8
    },
    titulo: {
        fontSize: 24,
        color: colors.black,
        marginBottom: 8,  
        fontWeight: 700,      
    },
    subtitulo: {
        fontSize: 14,
        color: colors.gray[500],
    }
})


