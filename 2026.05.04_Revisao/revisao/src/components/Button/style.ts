import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    button:{
        backgroundColor: 'tomato',
        padding: 8,
        paddingHorizontal: 32,
        borderRadius: 10,
        minWidth: 320,
        marginTop: 8

        // maxWidth: 400,
        // width: '100%'
    },
    textButton:{
        fontSize: 24,
        color: '#f2f2f2',
        fontWeight: 700,
        textAlign: 'center'
    },
    buttonAtivo: {
        backgroundColor: '#1d1d1d'
    },
    buttonDesativado: {
        backgroundColor: '#df2040'
    }
})