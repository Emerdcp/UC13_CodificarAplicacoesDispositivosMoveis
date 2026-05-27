import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context"

import ButtonIcon from "@/components/ButtonIcon";
import Header from "@/components/Header";
import Title from "@/components/Title";

import { StackRoutesProps } from "@/routes/StackRouters";
// import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs"; 
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

// import { useNavigation } from "@react-navigation/native"; 

export function Home({navigation}: DrawerRoutesProps<"home">){

    // const navigation = useNavigation()
    const insets = useSafeAreaInsets();

    return (
        <View style={{flex: 1, padding: 32, paddingTop: insets.top}
        }>
            <Header>
                {/* <Title>Home</Title> */}
                <ButtonIcon nomeIcone="menu" 
                    onPress={()=> {navigation.openDrawer()}}/>:

                <Title>Home</Title>
                <ButtonIcon nomeIcone="add-circle" 
                    onPress={()=> navigation.navigate("produto", {id: "67"})}/>:
            </Header>
        </View>
    )
}
