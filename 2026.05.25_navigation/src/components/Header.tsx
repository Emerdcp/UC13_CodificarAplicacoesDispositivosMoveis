import { Children } from "react"
import { View, ViewProps } from "react-native"


export default function Header({children, ...rest}: ViewProps){
    return(
        <View
            style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 54
            }}
            {...rest}
        >
            {children}
        </View>
    )
}