import { useState } from "react";
import {
    DateTimePickerAndroid,
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import Button from "@/components/Button";

type Props = {
    onSelect(date: Date): void;
};

export default function Alarme({ onSelect }: Props) {
    const [horaSelecionada, setHoraSelecionada] = useState(new Date());

    function selecionar(
        event: DateTimePickerEvent,
        date?: Date
    ) {
        if (event.type === "dismissed") return;

        if (!date) return;

        setHoraSelecionada(date);

        onSelect(date);
    }

    function abrirSeletor() {
        DateTimePickerAndroid.open({
            value: horaSelecionada,
            mode: "time",
            is24Hour: true,
            onChange: selecionar,
        });
    }

    return (
        <Button
            title="Definir Alarme"
            onPress={abrirSeletor}
        />
    );
}