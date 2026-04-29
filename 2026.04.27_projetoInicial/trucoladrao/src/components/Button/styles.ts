import {StyleSheet} from "react-native";
import Button from ".";

//Folha de estilo para usar em components
export const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'tomato',
        padding: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
        alignItems: 'center',
        margin: 4
    },
    texto: {
        fontSize: 24,
        fontWeight: 600,
        color: '#f2f2f2'
    }
})