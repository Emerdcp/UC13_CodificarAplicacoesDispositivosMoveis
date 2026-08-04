import { Modal, StyleSheet, Text, View, Vibration  } from "react-native";

import Button from "../Button";

type Props ={
    visible: boolean;
    hora: Date | null;
    onClose(): void;
}

export default function ModalAlarme({
    visible,
    hora,
    onClose,
}: Props){

    function pararAlarme(){
        Vibration.cancel();
        onClose();
    }

    return(
        <Modal
            visible={visible}
            animationType="fade"
            transparent
        >
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.icone}>
                        ⏰
                    </Text>

                    <Text style={styles.titulo}>
                        Alarme
                    </Text>

                    <Text style={styles.hora}>
                        {hora?.toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit"
                        })}
                    </Text>

                    <Text style={styles.texto}>
                        Está na hora!!!
                    </Text>

                    <Button
                        title="Parar"
                        onPress={pararAlarme}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles=StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        width: "85%",
        backgroundColor: "#FFF",
        padding: 25,
        borderRadius: 20,
        alignItems: "center",
    },

    icone: {
        fontSize: 70,
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 15,
    },

    hora: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#2E8B57",
        marginVertical: 20,
    },

    texto: {
        fontSize: 18,
        marginBottom: 25,
    },
})