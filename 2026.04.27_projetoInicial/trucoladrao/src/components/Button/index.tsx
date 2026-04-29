import { TouchableOpacity, TouchableOpacityProps, Text, Alert }    from "react-native"
import { styles } from './styles'

type Props = TouchableOpacityProps & {
    titulo: string
}

export default function Button({titulo, ...rest}: Props){
    return(
        <TouchableOpacity 
            {...rest}
            style={styles.button}
            
            // onPress={()=> 
            //     Alert.alert("Aviso", "você clicou!",[
            //         {text: "Não", style: "cancel"},
            //         {text: "Sim", style: 'default',
            //             onPress: () => 
            //                 Alert.alert('Você clicou em Sim')
            //         }
            //     ])
            // }
        >
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}