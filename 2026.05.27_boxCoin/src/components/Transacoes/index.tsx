import { View, Text, ViewBase, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/theme/colors";
import { styles } from "./style";
import { TransacoesType } from "@/utils/TransacoesType";

export type TransacoesProps = {
    id: string,
    value: string,
    date: string,
    descricao: string,
    tipo: TransacoesType
}

type Props = {
    data: TransacoesProps,
    onRemove:()=>void
}

export function Transacoes({data, onRemove}: Props){
    return(
        <View style={styles.container}>
            <MaterialIcons
            size={20}
            name={
                data.tipo === TransacoesType.Input
                ? 'arrow-upward'
                : 'arrow-downward'
            }
            color={
                data.tipo === TransacoesType.Input
                ? colors.blue[500]
                : colors.red[400]
            }
            />

            <View style={styles.info}>
                <Text style={styles.value}>{data.value}</Text>
                <Text style={styles.descricao} numberOfLines={1}>
                    {data.date} {data.descricao && `- ${data.descricao}`}
                </Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
                <MaterialIcons name='close' size={18} color={colors.gray[500]}/>
            </TouchableOpacity>

        </View>
    )
}

