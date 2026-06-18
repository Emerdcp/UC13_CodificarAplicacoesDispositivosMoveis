import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: colors.gray[100],
        paddingTop: 50,
        paddingVertical: 50
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 15,
    },

    infoContainer: {
        marginBottom: 16,
    },

    infoText: {
        fontSize: 16,
        color: colors.gray[800],
    },

    list: {
        flex: 1,
    },

    floatingButton: {
        marginBottom: 20,
    },

    summaryCard: {
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 3,
    },
});