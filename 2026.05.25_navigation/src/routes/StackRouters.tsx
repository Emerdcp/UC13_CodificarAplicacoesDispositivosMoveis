import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@/app/Home";
import { Produto } from "@/app/Produto";

const Stack = createNativeStackNavigator()

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="produto" component={Produto} />
        </Stack.Navigator>
    )
}