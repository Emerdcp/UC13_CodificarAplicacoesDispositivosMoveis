import { View, Text } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

import { PageHeader } from '@/components/PageHeader'
import { Button } from '@/components/Button'
import { Lista } from '@/components/Lista'
import { Progresso } from '@/components/Progresso'
import { Transacoes } from '@/components/Transacoes'
import { TransacoesType } from '@/utils/TransacoesType'


const detalhes = {
    atual: "R$ 2.000,00",
    meta: "R$ 2.000,00",
    porcentagem: 50
}

const transacoes = [
    {
        id: '1',
        value: 'R$ 300,00',
        date: '12/04/2026',
        descricao: 'CDB de 110% do CDI',
        tipo: TransacoesType.Input
    },
    {
        id: '2',
        value: 'R$ 100,00',
        date: '14/04/2026',
        descricao: 'Retirada de emergencia',
        tipo: TransacoesType.Output
    },
    {
        id: '3',
        value: 'R$ 700,00',
        date: '16/04/2026',
        descricao: 'CDB de 110% do CDI',
        tipo: TransacoesType.Input
    }
]

export default function emProgresso() {
    const params = useLocalSearchParams()
    return (
        <View style={{ flex: 1, padding: 24, gap: 32 }}>
            <PageHeader
                titulo='Apple Watch'
                rightButton={{
                    icon: 'edit',
                    onPress: () => console.log("Editando meta")
                }}
            />
            <Progresso data={detalhes} />

            <Lista
                titulo='transações'
                data={transacoes}
                renderItem={({ item }) => (
                    <Transacoes data={item} onRemove={() => console.log("Remover Transações")} />
                )}
            />

            <Button
                titulo='Nova Transção'
                onPress={() => router.navigate(`/transcao/${params.id}`)}
            />
        </View>
    )
}