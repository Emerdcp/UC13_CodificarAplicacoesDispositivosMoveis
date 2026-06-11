import { View, Text, Alert } from "react-native"
import { PageHeader } from "@/components/PageHeader"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { InputCurrency } from '@/components/InputCurrency'
import { useState } from "react"
import { router, useLocalSearchParams } from "expo-router"
import { useBoxCoinDatabase } from "@/database/useBoxCoinDatabase"

export default function Objetivo() {
    const [nomeMeta, setNomeMeta] = useState("")
    const [valor, setValor] = useState<number | null>(0)

    const params = useLocalSearchParams<{ id?: string }>()
    const boxCoinDatabase = useBoxCoinDatabase()

    function fnUserSave() {
        if (!nomeMeta.trim() || valor === null || valor <= 0) {
            return Alert.alert("Atenção!", "Preencha os campos de nome da meta e valor alvo.")
        }

        if (params.id) {
            //update    
        } else {
            salvarDadosBanco()
        }
    }

    async function salvarDadosBanco() {
        try {
            await boxCoinDatabase.create({
                name: nomeMeta,
                amount: Number(valor)
            })
            Alert.alert("Sucesso", "Meta criada com sucesso!", [
                {
                    text: "Ok", onPress:()=> router.back()
                }
            ])
        } catch (error) {
            Alert.alert("Erro", "Falha ao criar nova meta")
            console.log(error)
        }
    }

    return (
        <View style={{ flex: 1, padding: 24, gap: 32 }}>
            <PageHeader
                titulo="Meta"
                subtitulo='Economize para alcançar sua meta financeira'
            // rightButton={{
            //     icon: 'edit',
            //     onPress: () => console.log('Editar Meta')
            // }}
            />

            <View style={{ marginTop: 32, gap: 24 }}>
                <Input label="Nome da Meta"
                    placeholder="Ex: Comprar um carro 0"
                    value={nomeMeta}
                    onChangeText={setNomeMeta}
                />
                <InputCurrency
                    label='Valor alvo'
                    value={valor}
                    onChangeValue={setValor}
                />

                <Button
                    titulo='Salvar'
                    onPress={() => fnUserSave()}
                />
            </View>
        </View>
    )
}