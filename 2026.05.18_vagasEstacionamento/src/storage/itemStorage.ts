import AsyncStorage
from '@react-native-async-storage/async-storage'

const VEICULOS_STORAGE_KEY =
'@vagaBoxto:veiculos'

export type VeiculoStorage = {
    id: string
    placa: string
    entrada: string
    saida?: string
}

async function get():
Promise<VeiculoStorage[]> {

    try {

        const storage =
        await AsyncStorage.getItem(
            VEICULOS_STORAGE_KEY
        )

        return storage
            ? JSON.parse(storage)
            : []

    } catch (error) {

        throw new Error(
            'VEICULO_GET: ' + error
        )
    }
}

async function save(
    veiculos: VeiculoStorage[]
): Promise<void> {

    try {

        await AsyncStorage.setItem(
            VEICULOS_STORAGE_KEY,
            JSON.stringify(veiculos)
        )

    } catch (error) {

        throw new Error(
            'VEICULO_SAVE: ' + error
        )
    }
}

async function add(
    newVeiculo: VeiculoStorage
): Promise<VeiculoStorage[]> {

    const veiculos = await get()

    const updateVeiculos = [
        newVeiculo,
        ...veiculos
    ]

    await save(updateVeiculos)

    return updateVeiculos
}

async function registrarSaida(
    id: string,
    saida: string
): Promise<VeiculoStorage[]> {

    const veiculos = await get()

    const updateVeiculos =
    veiculos.map((item) => {

        if(item.id === id){

            return {
                ...item,
                saida
            }
        }

        return item
    })

    await save(updateVeiculos)

    return updateVeiculos
}

async function clear() {

    try {

        await AsyncStorage.removeItem(
            VEICULOS_STORAGE_KEY
        )

    } catch (error) {

        throw new Error(
            'CLEAR: ' + error
        )
    }
}

async function remove(id: string) {

    const veiculos = await get()

    const updateVeiculos =
    veiculos.filter(
        item => item.id !== id
    )

    await save(updateVeiculos)
}

export const fnStorage = {
    add,
    get,
    save,
    clear,
    remove,
    registrarSaida
}