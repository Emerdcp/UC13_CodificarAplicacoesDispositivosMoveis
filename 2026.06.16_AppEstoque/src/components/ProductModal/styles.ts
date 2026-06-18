import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        padding: 20,
    },

    container: {
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
    },

    closeButton: {
        alignSelf: "flex-end",
    },

    closeText: {
        fontSize: 28,
        fontWeight: "bold",
    },

    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 12,
        marginBottom: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },

    infoText: {
        fontSize: 18,
        marginBottom: 6,
    },

    totalText: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
    },

    editButton: {
        flex: 1,
        backgroundColor: colors.blue[500],
        height: 45,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
    },

    deleteButton: {
        flex: 1,
        backgroundColor: colors.red[500],
        height: 45,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
    },

    buttonText: {
        color: colors.white,
        fontWeight: "bold",
    },
});