import { useLocalSearchParams } from "expo-router"
import { Text, View } from 'react-native';
import { useState } from "react";

import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { InputCurrency } from "@/components/InputCurrency";
import { Button } from "@/components/Button";
import { TransacoesButton } from "@/components/TransacoesButton";
import { TransacoesTypes } from "@/utils/TransacoesType";

export default function Transaction() {
  const [type, settype] = useState(TransacoesTypes.Input)

  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader titulo="Nova Transação" subtitulo={`A cada valor  guardado voce fica mais perto da sua meta`} />

      <View style={{ marginTop: 32, gap: 16 }}>
        <TransacoesButton
          selected={type}
          onChange={settype}
        />

        <InputCurrency label="Valor (R$)" value={0} />
        <Input label="Motivo (opcional)" placeholder="Ex: CDB de 110% do CDI" />
        <Button titulo="Salvar Transação" onPress={() => console.log('Salvar transação')} />
      </View>
    </View>
  )
}