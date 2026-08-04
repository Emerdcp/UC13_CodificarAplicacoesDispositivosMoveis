import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { requestNotificationPermission, enviarNotificacaoComVibracao } from "@/services/notifications"

import Alarme from "@/components/Alarme"
import ModalAlarme from "@/components/ModalAlarme";


export default function App() {

  const [horaAtual, setHoraAtual] = useState(new Date());
  const [alarme, setAlarme] = useState<Date | null>(null);
  const [alarmeDisparado, setAlarmeDisparado] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {

    requestNotificationPermission();

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

        // envioVibraNotificacao();
        enviarNotificacaoComVibracao();

        setModalVisible(true);


      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [alarme, alarmeDisparado]);


  return (
    <View style={styles.container}>

      {/* CARD DA HORA */}
      <View style={styles.card}>

        <Text style={styles.label}>
          Agora são
        </Text>

        <Text style={styles.hora}>
          {horaAtual.toLocaleTimeString("pt-BR")}
        </Text>

      </View>

      {/* CARD DO ALARME */}
      <View style={styles.card}>

        <Text style={styles.label}>
          Próximo Alarme
        </Text>

        <Text style={styles.horaAlarme}>
          {alarme
            ? alarme.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
            })
            : "--:--"}
        </Text>

      </View>

      <Alarme
        onSelect={(hora) => {
          setAlarme(hora);
          setAlarmeDisparado(false);
        }}
      />

      <ModalAlarme
        visible={modalVisible}
        hora={alarme}
        onClose={() => setModalVisible(false)}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6F8",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 25,
    marginBottom: 25,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  label: {
    fontSize: 18,
    color: "#666",
    marginBottom: 12,
  },
  hora: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#222",
  },
  horaAlarme: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#2E8B57",
  },
});