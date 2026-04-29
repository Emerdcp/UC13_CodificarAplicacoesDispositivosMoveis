import { TextInput, TextInputProps, Text } from "react-native"
import { styles } from './styles'

export default function input({...rest}: TextInputProps){
    return (
        <TextInput
            style={styles.input}
            {...rest}
        />
    )
}