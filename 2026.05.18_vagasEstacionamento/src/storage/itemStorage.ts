import AsyncStorage from '@react-native-async-storage/async-storage';

import { FilterStatus } from "@/types/FilterStatus"

const ITENS_STORAGE_KEY = '@listacompras:itens'

export type ItemStorage = {
    id: string, //chave randonica {sequência de caractaer}
    status: FilterStatus,
    description: string
}

//Função base para consulta de dados
async function get(): Promise<ItemStorage[]>{
    try{
        const storage = await AsyncStorage.getItem(ITENS_STORAGE_KEY)

        return storage ? JSON.parse(storage): []

    } catch (error){
        throw new Error("ITEM_GET: " + error)
    }
}

//Função base para salvar todos os dados
async function save(itens: ItemStorage[]): Promise<void>{
    try{
        await AsyncStorage.setItem(ITENS_STORAGE_KEY, JSON.stringify(itens))
    } catch (error){
        throw new Error("ITEM_SAVE: " + error)
    }
}

//Função base para atualizar os itens adicionados
async function add(newItem:ItemStorage):Promise<ItemStorage[]> {
    const itens = await get()   //Elementos [item1, item2, item3]
    const updateItem = [...itens, newItem]

    await save(updateItem)
    return updateItem    
}

//Função para Filtrar os itens
async function getByFilter(statusFilter: FilterStatus) {
    const itens = await get() // ATIVO DESATIVADO, ATIVO, ATIVO, DESATIVADO
    const itensFiltrados = itens.filter((item)=>item.status === statusFilter)

    return itensFiltrados
}

async function clear() {
    try {
        await AsyncStorage.removeItem(ITENS_STORAGE_KEY)
    } catch (error) {
        throw new Error('CLEAR ' + error)
    }
}

async function remove(id: string) {
    const itens = await get()
    const updateItem = itens.filter(item => item.id !== id)
    await save(updateItem)
}


//Adiciona as funções para poder importar
export const fnStorage = {
    add,
    get,
    getByFilter,
    save,
    clear,
    remove
}