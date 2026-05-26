import {MaterialIcons} from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    nomeIcone: keyof typeof MaterialIcons.glyphMap
}


export default function ButtonIcon({ nomeIcone, ...rest}: Props){
    return(
        <TouchableOpacity {...rest}>
            <MaterialIcons name={nomeIcone} size={32} />
        </TouchableOpacity>
    )
}