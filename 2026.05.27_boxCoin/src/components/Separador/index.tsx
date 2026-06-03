import { View, ColorValue} from 'react-native'

import { style } from './style'
import { Background } from 'expo-router/build/react-navigation'

export function Separador ({color}: {color: ColorValue}){
    return(
        <View style={[style.separador, {backgroundColor: color}]}></View>
    )
}