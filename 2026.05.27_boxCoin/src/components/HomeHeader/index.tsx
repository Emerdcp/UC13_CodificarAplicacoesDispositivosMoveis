import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/colors";

import { styles } from "./style"; 

export function HomeHeader(){
    return(
        <LinearGradient 
            colors={[colors.blue[500], colors.gray[900]]} 
            style={styles.container}
        >
            <View>
                <Text style={styles.label}>Total que você possui</Text>
                <Text style={styles.total}>R$ 2.680,00</Text>
            </View>
        </LinearGradient>
    )
}