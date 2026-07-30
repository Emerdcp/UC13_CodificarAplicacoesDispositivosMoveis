import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { requestNotificationPermission, enviarNotificacaoComVibracao} from "@/services/notifications"

import Alarme from "@/components/Alarme"


export default function App() {

  const [horaAtual, setHoraAtual] = useState(new Date());
  const [alarme, setAlarme] = useState<Date | null>(null);
  const [alarmeDisparado, setAlarmeDisparado] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    if (!alarme) return;

    const intervalo = setInterval(() => {
      const agora = new Date();

      if (
        alarme &&
        !alarmeDisparado &&
        agora.getHours() === alarme.getHours() &&
        agora.getMinutes() === alarme.getMinutes()
      ) {
        console.log("Alarme!")

        setAlarmeDisparado(true);
        
        enviarNotificacaoComVibracao();

      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [alarme]);


  return (
    <View style={styles.container}>
      <Text style={styles.hora}>
        {horaAtual.toLocaleTimeString("pt-BR")}
      </Text>
      <Text style={styles.alarme}>
        {alarme
          ? `Alarme: ${alarme.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}`
          : "Alarme: Não definido"}
      </Text>
      <Alarme
        onSelect={(hora) => {
          setAlarme(hora);
          setAlarmeDisparado(false);
        }}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hora: {
    fontSize: 42,
    fontWeight: "bold",
  },
  alarme: {
    marginTop: 20,
    fontSize: 22,
  },
})