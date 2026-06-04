import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex:1
    },
    listContent:{
        gap: 16,
        padding: 16,
        paddingBottom: 72,        
    },
    titulo: {
        marginTop: 24,
        paddingBottom: 16,
        fontSize: 18,
        color: colors.black,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
    },
    empty:{
        fontSize: 14,
        color: colors.gray[600],
        flex: 1,
        textAlign: "center",
        paddingTop: 16,
    },
})