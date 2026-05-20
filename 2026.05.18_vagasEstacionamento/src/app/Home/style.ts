import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#9fa4af",
        paddingTop: 60,
        paddingHorizontal: 16,
    },

    logo: {
        width: 268,
        height: 68,
        resizeMode: "contain",
        alignSelf: "center",
        marginBottom: 24,
    },

    form: {
        width: "100%",
        gap: 10,
        marginBottom: 20,
    },

    filterContainer: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 20,
    },

    filterButton: {
        flex: 1,
        backgroundColor: "#1E293B",
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
    },

    filterActive: {
        backgroundColor: "#2563EB",
    },

    filterText: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
    },

    listContent: {
        paddingBottom: 40,
    },

    card: {
        backgroundColor: "#1E293B",
        width: "48%",
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    placa: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },

    info: {
        color: "#CBD5E1",
        fontSize: 14,
        marginBottom: 6,
    },

    saida: {
        color: "#22C55E",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 10,
    },

    empty: {
        color: "#94A3B8",
        textAlign: "center",
        marginTop: 40,
        fontSize: 16,
    },


    clearButton: {

        backgroundColor: "#DC2626",

        paddingVertical: 12,

        borderRadius: 12,

        alignItems: "center",

        marginBottom: 20,
    },

    clearText: {

        color: "#FFF",

        fontWeight: "bold",

        fontSize: 14,
    },

});