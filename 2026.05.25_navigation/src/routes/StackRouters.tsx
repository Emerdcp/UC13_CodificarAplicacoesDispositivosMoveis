import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import { Home } from "@/app/Home";
import { Produto } from "@/app/Produto";

export type RotasDisponiveis = {
    home: undefined
    produto: undefined | {id: string}
}

export type StackRoutesProps<RotaAtual extends keyof RotasDisponiveis> 
    = NativeStackScreenProps<RotasDisponiveis, RotaAtual>

const Stack = createNativeStackNavigator<RotasDisponiveis>()

export function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="produto" component={Produto} />
        </Stack.Navigator>
    )
}