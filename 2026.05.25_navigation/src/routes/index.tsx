import { DrawerRouter, NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRouters";
import { BottomTabRoutes } from "./BottomTabRoute";

import { DrawerRoutes } from "./DrawerRoutes";

export function Routes(){
    return(
        <NavigationContainer>
            {/* <StackRoutes /> */}
            {/* <BottomTabRoutes/> */}
            <DrawerRoutes/>
        </NavigationContainer>
    )
}