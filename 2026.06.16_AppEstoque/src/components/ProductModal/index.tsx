import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

type Props = {
    visible: boolean;
    onClose: () => void;

    product: {
        id: number;
        title: string;
        quantity: number;
        price?: number;
    } | null;
};

export function ProductModal({
    visible,
    onClose,
    product,
}: Props) {

    console.log("VISIBLE:", visible);
    console.log("PRODUCT:", product);

    if (!product) return null;

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>

                <View style={styles.container}>

                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeButton}
                    >
                        <Text style={styles.closeText}>
                            ✕
                        </Text>
                    </TouchableOpacity>

                    <Image
                        source={{
                            uri: "https://picsum.photos/200",
                        }}
                        style={styles.image}
                    />

                    <Text style={styles.title}>
                        {product.title}
                    </Text>

                    <Text style={styles.infoText}>
                        Quantidade: {product.quantity}
                    </Text>

                    <Text style={styles.infoText}>
                        Valor Unitário: R$ 25,00
                    </Text>

                    <Text style={styles.totalText}>
                        Valor Total: R$ {product.quantity * 25},00
                    </Text>

                    <View style={styles.buttonContainer}>

                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => {

                                onClose();

                                router.push({
                                    pathname: "/produto/edit",
                                    params: {
                                        id: product.id,
                                    },
                                });
                            }}
                        >
                            <Text style={styles.buttonText}>
                                Editar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.deleteButton}
                        >
                            <Text style={styles.buttonText}>
                                Excluir
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}