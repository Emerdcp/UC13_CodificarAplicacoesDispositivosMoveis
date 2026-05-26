import { View } from "react-native";

import ButtonIcon from "@/components/ButtonIcon";
import Header from "@/components/Header";
import Title from "@/components/Title";

// import { useNavigation } from "@react-navigation/native";

import { StackRoutesProps } from "@/routes/StackRouters";

export function Produto({navigation, route}: StackRoutesProps<"produto">){

    // const navigation = useNavigation()

    return (
        <View style={{flex: 1, padding: 32, paddingTop: 54}
        }>
            <Header>
                <ButtonIcon nomeIcone="arrow-circle-left" 
                    onPress={()=> navigation.goBack()}/>
                <Title>Produto{route.params?.id}</Title>
            </Header>
        </View>
    )
}
