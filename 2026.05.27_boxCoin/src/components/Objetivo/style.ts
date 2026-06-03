import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
    container: {
        height: 72,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingBottom: 16.
    },
    content: {
        flex: 1,
        gap: 8,
    },
    nome: {
        fontSize: 14,
        color: colors.black
    },
    status: {
        fontSize: 10,
        color: colors.gray[500]
    }
})