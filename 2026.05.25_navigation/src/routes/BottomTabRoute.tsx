import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/app/Home";
import { Produto } from "@/app/Produto";

export type RotasDisponiveis = {
    home: undefined
    produto: undefined | {id: string}
}

export type BottomTabRoutesProps<RotaAtual extends keyof RotasDisponiveis> 
    = BottomTabScreenProps<RotasDisponiveis, RotaAtual>

const Tab = createBottomTabNavigator<RotasDisponiveis>()

export function BottomTabRoutes(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#676767",
            tabBarActiveBackgroundColor: "blue"
        }}>
            <Tab.Screen name="home" 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size}) => <MaterialIcons 
                    name="home" color={color} size={size}/>
                }}
            />
            <Tab.Screen name="produto" 
                component={Produto} 
                options={{
                    tabBarIcon: ({color, size}) => <MaterialIcons 
                    name="shopping-cart"color={color} size={size}/>
                }}
            />
        </Tab.Navigator>
    )
}
