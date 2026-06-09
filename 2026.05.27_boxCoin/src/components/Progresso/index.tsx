import { View, Text } from 'react-native'
import { styles } from './style'

type Props = {
    data:{
        atual: string,
        meta: string,
        porcentagem: number
    }
}

export function Progresso({data}: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Valor Guardado</Text>
            <View style={styles.status}>
                <Text style={styles.value}>
                    {data.atual}
                    <Text style={styles.meta}> de {data.meta}</Text>
                </Text>
            </View>

            <View style={styles.progresso}>
                <View style={[styles.progressoAtual, {width: `${data.porcentagem}%` }]}/>
            </View>
        </View>
    )
}