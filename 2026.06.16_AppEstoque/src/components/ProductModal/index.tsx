import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { Alert } from "react-native";
import { useProductDatabase } from "@/database/useProductDatabase";

type Props = {
    visible: boolean;
    onClose: () => void;
    onDeleteSuccess: () => void;

    product: {
        id: number;
        image_url: string;
        title: string;
        description: string;
        quantity: number;
        price: number;
    } | null;
};

export function ProductModal({
    visible,
    onClose,
    onDeleteSuccess,
    product,
}: Props) {

    const productDatabase = useProductDatabase();

    async function handleDelete() {
        if (!product) return;
        try {
            await productDatabase.remove(
                product.id
            );

            Alert.alert(
                "Sucesso",
                "Produto excluído."
            );
            onDeleteSuccess();
            onClose();
        } catch (error) {
            console.log(error);
            Alert.alert(
                "Erro",
                "Não foi possível excluir."
            );
        }
    }

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
                            uri: product.image_url,
                        }}
                        style={styles.image}
                    />

                    <Text style={styles.title}>
                        {product.title}
                    </Text>

                    <Text style={styles.infoText}>
                        Descrição: {product.description}
                    </Text>

                    <Text style={styles.infoText}>
                        Quantidade: {product.quantity}
                    </Text>

                    <Text style={styles.infoText}>
                        Valor Unitário: R$ {product.price.toFixed(2)}
                    </Text>

                    <Text style={styles.totalText}>
                        Valor Total: R$ {(product.quantity * product.price).toFixed(2)}
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
                            onPress={() =>
                                Alert.alert(
                                    "Excluir Produto",
                                    `Deseja excluir ${product.title}?`,
                                    [
                                        {
                                            text: "Cancelar",
                                            style: "cancel",
                                        },
                                        {
                                            text: "Excluir",
                                            style: "destructive",
                                            onPress: handleDelete,
                                        },
                                    ]
                                )
                            }
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