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

export async function requestPermissaoNotificacao() {
    const {status} = await Notifications.requestPermissionsAsync()

    return status === "granted";
}

//Notificações Imediatas
export async function envioImediatoNotivicacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "📢OLHA MENSAGEMMMM📢",
            body: "Essa mensagem é Imediata."
        },
        trigger: null
    })    
}

//Após 10 segundos
export async function envioDelayNotivicacao() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "🔊Notificação Atrasada....",
            body: "Passaram 5 segundos."
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: 5,
            // repeats: true
        }
    })    
}

//Notificações com Som
export async function envioSomNotivicacao() {
    //com som personalizado.
    // await Notifications.setNotificationCategoryAsync('custom-sound-channel',{
    //     name: "Ifood",
    //     sound:"somPersonalizado.mp3",
    //     importance:Notifications.AndroidImportance.MAX
    // })

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "🎹 Com som",
            body: "Essa mensagem é Imediata.",
            sound: "default"
        },
        trigger: null
    })    
}

//Cancelar notificações;
export async function cancelarTodasNotificacoes() {
    await Notifications.cancelAllScheduledNotificationsAsync()
}

//Notificações com Som
export async function envioVibraNotivicacao() {
    Vibration.vibrate(500);

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "🫨 Vibrando 📳",
            body: "Essa mensagem é Imediata.",
            sound: "default"
        },
        trigger: null
    })    
}