import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: colors.gray[100],
        paddingTop: 60,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        // textAlign: "center",
        // marginBottom: 20,
        marginLeft: 15,
    },

    input: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 15,
    },

    textArea: {
        height: 100,
        textAlignVertical: "top",
        paddingTop: 15,
    },

    button: {
        backgroundColor: colors.blue[500],
        height: 55,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },

    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
});