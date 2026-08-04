import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useEffect, useState } from "react";
import { requestNotificationPermission, enviarNotificacaoComVibracao } from "@/services/notifications"

import Alarme from "@/components/Alarme"
import ModalAlarme from "@/components/ModalAlarme";

type Alarme = {
  id: number;
  hora: Date;
  ativo: boolean;
  disparado: boolean;
};

export default function App() {

  const [horaAtual, setHoraAtual] = useState(new Date());
  const [alarmes, setAlarmes] = useState<Alarme[]>([]);
  const [alarmeDisparado, setAlarmeDisparado] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editarId, setEditarId] = useState<number | null>(null);
  const [abrirEditor, setAbrirEditor] = useState(false);

  const alarmeAtual = alarmes.length > 0 ? alarmes[0] : null;
  

  useEffect(() => {

    requestNotificationPermission();

    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);

  }, []);

  useEffect(() => {

    const intervalo = setInterval(() => {
      const agora = new Date();
      const encontrado = alarmes.find((item) => {
        if (!item.ativo) return false;
        if (item.disparado) return false;

        return (
          agora.getHours() === item.hora.getHours() &&
          agora.getMinutes() === item.hora.getMinutes()
        );

      });

      if (encontrado && !alarmeDisparado) {
        console.log("ALARME:", encontrado.id);
        setAlarmes((lista) =>
          lista.map((item) =>
            item.id === encontrado.id
              ? {
                ...item,
                disparado: true,
              }
              : item
          )
        );
        enviarNotificacaoComVibracao();
        setModalVisible(true);
      }
    }, 1000);

    return () => clearInterval(intervalo);

  }, [alarmes, alarmeDisparado]);

  function alterarStatus(id: number) {
    setAlarmes((lista) =>
      lista.map((item) =>
        item.id === id
          ? { ...item, ativo: !item.ativo }
          : item
      )
    );
  }

  function excluirAlarme(id: number) {
    setAlarmes((lista) =>
      lista.filter((item) => item.id !== id)
    );
  }

  function editarAlarme(id: number) {
    setEditarId(id);
    setAbrirEditor(true);
  }

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.label}>
          Agora são
        </Text>

        <Text style={styles.hora}>
          {horaAtual.toLocaleTimeString("pt-BR")}
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Alarmes
        </Text>

        {alarmes.length === 0 ? (

          <Text style={styles.semAlerme}>
            Nenhum alarme cadastro!!!
          </Text>
        ) : (

          alarmes.map((item) => (

            <View
              key={item.id}
              style={styles.itemAlarme}
            >

              <View>

                <Text style={styles.itemHora}>
                  ⏰ {item.hora.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>

                <Text style={styles.status}>
                  {item.ativo ? "Ativo" : "Inativo"}
                </Text>

              </View>

              <View style={styles.acoes}>

                <Switch
                  value={item.ativo}
                  onValueChange={() => alterarStatus(item.id)}
                />

                <TouchableOpacity
                  onPress={() => editarAlarme(item.id)}
                >
                  <Text style={styles.icone}>✏️</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => excluirAlarme(item.id)}
                >
                  <Text style={styles.icone}>🗑️</Text>
                </TouchableOpacity>

              </View>

            </View>

          ))
        )}

      </View>

      <Alarme
        open={abrirEditor}
        onClose={() => setAbrirEditor(false)}
        onSelect={(hora) => {

          if (editarId !== null) {

            setAlarmes((lista) =>
              lista.map((item) =>
                item.id === editarId
                  ? { ...item, hora }
                  : item
              )
            );

            setEditarId(null);
            return;
          }

          setAlarmes((lista) => [
            ...lista,
            {
              id: Date.now(),
              hora,
              ativo: true,
              disparado: false,
            },
          ]);

          setAlarmeDisparado(false);
        }}
      />
      <ModalAlarme
        visible={modalVisible}
        hora={alarmeAtual?.hora ?? null}
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
  semAlerme: {
    fontSize: 18,
    color: "#888",
  },
  itemAlarme: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  itemHora: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E8B57"
  },
  itemStatus: {
    fontSize: 22,
  },
  acoes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  status: {
    color: "#666",
    marginTop: 5,
    fontSize: 14,
  },
  icone: {
    fontSize: 22,
  },
});