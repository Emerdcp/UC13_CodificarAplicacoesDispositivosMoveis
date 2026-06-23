import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
        paddingHorizontal: 20,
        paddingTop: 55,
    },

    title: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1A1A1A",
        marginBottom: 25,
    },

    subtitle: {
        textAlign: "center",
        color: "#7A7A7A",
        fontSize: 14,
        marginTop: -18,
        marginBottom: 25,
    },

    searchContainer: {
        marginBottom: 20,
    },

    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    statCard: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 18,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,

        elevation: 4,
    },

    statCardLeft: {
        marginRight: 8,
    },

    statCardRight: {
        marginLeft: 8,
    },

    statIcon: {
        fontSize: 28,
        marginBottom: 8,
    },

    statValue: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#222",
    },

    statLabel: {
        marginTop: 4,
        fontSize: 13,
        color: "#777",
    },

    summaryCard: {
        backgroundColor: "#FFFFFF",
        padding: 18,
        borderRadius: 18,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,

        elevation: 3,
    },

    infoText: {
        fontSize: 16,
        color: "#444",
        marginBottom: 4,
    },

    list: {
        paddingBottom: 120,
    },

    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },

    emptyIcon: {
        fontSize: 60,
        marginBottom: 10,
    },

    emptyTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },

    emptyText: {
        color: "#777",
        marginTop: 5,
    },

    floatingButton: {
        position: "absolute",
        bottom: 30,
        right: 25,
    },
});