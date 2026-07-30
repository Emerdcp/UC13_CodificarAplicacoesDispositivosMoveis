import { Vibration } from "react-native";

export async function vibracaoSimples() {
    Vibration.vibrate();
    console.log("Trepidando, Trepidando, Trepidando, Trepidando")
}

export async function vibracaoLonga() {
    Vibration.vibrate(2000);
    console.log("longa, longa, longa, longa")
}

export function vibracaoRepeat(){
    Vibration.vibrate(2000, true)
}

export function vibracaoCancelar(){
    Vibration.cancel()
}