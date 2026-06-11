import { colors } from "@/theme/colors";
import { router, useFocusEffect } from "expo-router";
import { View, Text, Alert, } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HomeHeader } from "@/components/HomeHeader";
import { Objetivo, ObjetivoProps } from "@/components/Objetivo";
import { Lista } from "@/components/Lista";
import { Button } from "@/components/Button";

import { BoxCoinResponse, useBoxCoinDatabase } from "@/database/useBoxCoinDatabase";
import { useCallback, useState } from "react";

const resumo = {
    total: "R$ 8.745,00",
    input: {
        label: "Entrada",
        value: "R$ 9.854,00"
    },
    output: {
        label: "Saídas",
        value: "-R$ 1.754,00"
    }
}

// const objetivos = [
//     {
//         id: "1",
//         nome: "Comprar cadeira ergonomica",
//         porcentagem: "50%",
//         meta: "R$ 2.000,00",
//         atual: "R$ 1.000,00",
//     },
//     {
//         id: "2",
//         nome: "Apple watch",
//         porcentagem: "75%",
//         meta: "R$ 1.000,00",
//         atual: "R$ 750,00",
//     },
//     {
//         id: "3",
//         nome: "AirPods",
//         porcentagem: "43%",
//         meta: "R$ 2.300,00",
//         atual: "R$ 1.150,00",
//     }
// ]

export default function Index() {
    const insets = useSafeAreaInsets()
    const boxCoinDatabase = useBoxCoinDatabase()
    const [objetivos, setObjetivos] = useState<ObjetivoProps[]>([])

    async function fetchMetas():Promise<ObjetivoProps[]> {
        try {
            const response = await boxCoinDatabase.ListBySavedValue()
            console.log(response)
            return response.map((item) => ({
                id: String(item.id),
                nome: item.name,
                porcentagem: item.percentage.toFixed(0) + "%",
                meta: String(item.amount),
                atual: String(item.current),

            })
            )
        } catch (error) {
            Alert.alert("Erro", "Falha ao carregar as metas")
            console.log(error)
            return[]
        }
    }

    async function fetchData(){
        const BoxCoinPromise=await fetchMetas()
        const [boxCoinData] = await Promise.all([BoxCoinPromise])

        setObjetivos(boxCoinData)
     }

    useFocusEffect(
        useCallback(() => { fetchData() }, [])
    )

    return (
        <View style={{ flex: 1, paddingTop: insets.top }}>
            <HomeHeader data={resumo} />

            <Lista
                titulo='Metas'
                data={objetivos}
                renderItem={({ item }) =>
                    <Objetivo data={item}
                        onPress={() => router.navigate(`/em-progresso/${item.id}`)}
                    />
                }
                emptyMensagem='Nenhuma meta encontrada'
                containerStyle={{ paddingHorizontal: 24 }}
            />

            <View style={{ padding: 24, marginBottom: 32 }}>
                <Button titulo='Nova Meta' onPress={() => router.navigate("/objetivo")} />
            </View>

        </View>
    )
}