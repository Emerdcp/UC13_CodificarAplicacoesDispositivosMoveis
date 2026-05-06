import { TextInput, TextInputProps } from 'react-native'
import { style } from './style'

export default function Inpunt({...rest}: TextInputProps) {
    return(
        <TextInput style={style.input} {...rest}>
            
        </TextInput>
    )
}