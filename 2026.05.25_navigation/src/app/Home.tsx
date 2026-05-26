import { View } from "react-native";

import ButtonIcon from "@/components/ButtonIcon";
import Header from "@/components/Header";
import Title from "@/components/Title";

import { useNavigation } from "@react-navigation/native"; 

export function Home(){

    const navigation = useNavigation()

    return (
        <View style={{flex: 1, padding: 32, paddingTop: 54}
        }>
            <Header>
                <Title>Home</Title>
                <ButtonIcon nomeIcone="add-circle" 
                    onPress={()=> navigation.navigate("produto")}/>:
            </Header>
        </View>
    )
}
