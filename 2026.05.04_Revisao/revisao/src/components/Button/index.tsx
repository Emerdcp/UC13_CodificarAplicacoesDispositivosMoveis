import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps & {
    text: string,
    isAtivado: boolean
}

export default function Button({text, isAtivado, ...rest}: Props){
    return(
        <TouchableOpacity
            // activeOpacity={0.4}
            // style={isAtivado === true 
            //     ? [{backgroundColor: 'red'}] 
            //     : [{backgroundColor: 'green'}]
            // }

            // style={style.button}

            {...rest}
            style={isAtivado === true 
                ? [style.button, style.buttonAtivo] 
                : [style.button, style.buttonDesativado]
            }
        >
            <Text 
                // style={[{fontSize: 32}]}
                style={style.textButton}
            >
                {text !== '' ? text : "Botão Desconfigurado!"}
            </Text>
        </TouchableOpacity>
    )
}