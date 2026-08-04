import { useEffect, useState } from "react";
import {
    DateTimePickerAndroid,
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import Button from "@/components/Button";

type Props = {
    onSelect(date: Date): void;
    open?: boolean;
    onClose?(): void;
};

export default function Alarme({ onSelect, open = false, onClose, }: Props) {
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

    useEffect(() => {
        if (open) {
            abrirSeletor();
            onClose?.();
        }
    }, [open]);

    return (
        !open && (
            <Button
                title="Definir Alarme"
                onPress={abrirSeletor}
            />
        )
    );
}