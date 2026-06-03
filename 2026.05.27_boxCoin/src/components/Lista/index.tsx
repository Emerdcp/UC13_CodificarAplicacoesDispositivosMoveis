import { 
    View, 
    ViewStyle,
    Text, 
    FlatList, 
    FlatListProps,
    StyleProp
} from "react-native"

import { styles } from './style'
import { colors } from "@/theme/colors"
import { Separador } from "@/components/Separador"

type Props<ItemT> = FlatListProps<ItemT> & {
    titulo: string,
    emptyMensagem?: string,
    containerStyle?: StyleProp<ViewStyle>
}

export function Lista<T>({
    titulo, 
    emptyMensagem = "Nenhum item encontrado",
    containerStyle,
    data,
    renderItem,
    ...rest
}: Props<T>){
    return(
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.titulo}>{titulo}</Text>
            <FlatList 
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={()=><Separador color={colors.gray[200]} />}
                ListEmptyComponent={()=><Text style={styles.empty}>{emptyMensagem}</Text>}
                {...rest}
            />
        </View>
    )
}

