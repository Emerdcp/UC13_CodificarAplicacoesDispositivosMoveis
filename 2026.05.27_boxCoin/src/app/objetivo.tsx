import { View, Text, Alert } from "react-native"
import { PageHeader } from "@/components/PageHeader"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"
import { InputCurrency } from '@/components/InputCurrency'
import { useEffect, useState } from "react"
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
            atualizarDadosBanco()
        } else {
            salvarDadosBanco()
        }
    }

    async function atualizarDadosBanco() {
        try {
            await boxCoinDatabase.update({
                name: nomeMeta,
                amount: Number(valor),
                id: Number(params.id)
            })
            Alert.alert("Sucesso", "Meta atualizada com sucesso.", [
                { text: "OK", onPress: () => router.back() }
            ])
        } catch (error) {
            Alert.alert("Erro", "Falha ao atualizar a meta")
            console.log(error)
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
                    text: "Ok", onPress: () => router.back()
                }
            ])
        } catch (error) {
            Alert.alert("Erro", "Falha ao criar nova meta")
            console.log(error)
        }
    }

    async function fetchDetalhes(id: number) {
        try {
            const response = boxCoinDatabase.show(id)
            setNomeMeta(response?.name ?? "")
            setValor(response?.amount ?? 0)
        } catch (error) {
            Alert.alert("Não foi possível carregar os detalhes da meta")
            console.log(error)
        }
    }

    async function fnUserDelete(){
        try{
            if(!params.id){
                return Alert.alert("Erro", "Não foi possível identificar a meta.")
            }

            Alert.alert("Atenção", "Deseja excluir está meta", [
                {text: "Cancelar", style: "cancel"},
                {text: "Sim", onPress: async () => {await remover()}}
            ])
        }catch(error){
            Alert.alert("Erro", "Erro ao excluir a meta")
        }
    }

    async function remover() {
        await boxCoinDatabase.remove(Number(params.id))
        Alert.alert("Sucesso", "Meta excluída", [
            {text: 'OK', onPress: () => router.replace("/")}
        ])
    }

    useEffect(() => {
        if (params.id) {
            fetchDetalhes(Number(params.id));
        }
    }, [params.id]);

    return (
        <View style={{ flex: 1, padding: 24, gap: 32 }}>
            <PageHeader
                titulo="Meta"
                subtitulo='Economize para alcançar sua meta financeira'
                rightButton={
                    params.id ? {
                        icon: 'delete',
                        onPress: () => fnUserDelete()
                    } : undefined
                }
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