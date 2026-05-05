import { TouchableOpacity, Text } from "react-native";

export default function Button(){
    return(
        <TouchableOpacity>
            <Text 
                style={[{fontSize: 32}]}
            >
                Click Aqui!!!
            </Text>
        </TouchableOpacity>
    )
}