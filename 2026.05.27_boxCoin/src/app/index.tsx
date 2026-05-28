import { colors } from "@/theme/colors";
import { router } from "expo-router";
import { View, Text, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HomeHeader } from "@/components/HomeHeader";

export default function Index(){
    const insets = useSafeAreaInsets()
    return(
        <View style={{flex: 1, paddingTop: insets.top }}>
            <HomeHeader />
        </View>
    )
}