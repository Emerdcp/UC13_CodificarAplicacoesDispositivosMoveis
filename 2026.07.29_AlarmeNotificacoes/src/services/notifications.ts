import * as Notifications from "expo-notifications"
import { Vibration } from "react-native";

Notifications.setNotificationHandler({
    handleNotification: async() => ({
        shouldPlaySound: true,
        shouldShowList: true,
        shouldShowBanner: true,
        shouldSetBadge: false,
    })
})

export async function requestNotificationPermission() {
    const {status} = await Notifications.requestPermissionsAsync()

    return status === "granted";
}


export async function envioImediatoNotivicacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "📢OLHA MENSAGEMMMM📢",
            body: "Essa mensagem é Imediata."
        },
        trigger: null
    })    
}


export async function envioSomNotificacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "🎹 Com som",
            body: "Essa mensagem é Imediata.",
            sound: "default"
        },
        trigger: null
    })    
}


export async function enviarNotificacaoComVibracao() {
    Vibration.vibrate(500);

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "🫨 Acorda 📳",
            body: "Acorda....",
            sound: "default"
        },
        trigger: null
    })    
}