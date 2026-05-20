import {
  View,
  Image,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {
  useState,
  useEffect
} from 'react';

import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

import { style } from './style';

import {
  VeiculoStorage,
  fnStorage
} from '@/storage/itemStorage';

import {
  FilterStatus
} from '@/types/FilterStatus';

export default function Home() {

  const [placa, setPlaca] = useState('');

  const [veiculos, setVeiculos] =
    useState<VeiculoStorage[]>([]);

  const [filter, setFilter] =
    useState(FilterStatus.ESTACIONADOS);

  useEffect(() => {
    carregarVeiculos();
  }, []);

  function formatarPlaca(texto: string) {

    const textoLimpo =
      texto
        .replace(/[^a-zA-Z0-9]/g, '')
        .toUpperCase()
        .slice(0, 7);

    setPlaca(textoLimpo);
  }

  const veiculosFiltrados =
    veiculos.filter((item) => {

      if (
        filter ===
        FilterStatus.ESTACIONADOS
      ) {
        return !item.saida;
      }

      return item.saida;
    });

  async function carregarVeiculos() {

    try {

      const response =
        await fnStorage.get();

      setVeiculos(response);

    } catch (error) {

      Alert.alert(
        'Erro',
        'Não foi possível carregar os veículos.'
      );
    }
  }

  function calcularValor(entrada: Date) {

    const agora = new Date();

    const diferenca =
      agora.getTime() - entrada.getTime();

    const horas = Math.ceil(
      diferenca / (1000 * 60 * 60)
    );

    if (horas <= 1) {
      return 5;
    }

    return 5 + (horas - 1);
  }

  async function adicionarVeiculo() {

    const regexPlaca =
      /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;

    if (!regexPlaca.test(placa)) {

      return Alert.alert(
        'Placa inválida',
        'Informe uma placa válida.'
      );
    }

    try {

      if (!placa.trim()) {

        return Alert.alert(
          'Adicionar',
          'Informe a placa.'
        );
      }

      const placaExiste =
        veiculos.some(
          item =>
            item.placa === placa &&
            !item.saida
        );

      if (placaExiste) {

        return Alert.alert(
          'Placa já estacionada',
          'Esse veículo já está no estacionamento.'
        );
      }

      const novoVeiculo: VeiculoStorage = {

        id: Math.random().toString(36),

        placa: placa.toUpperCase(),

        entrada:
          new Date().toISOString(),
      };

      const response =
        await fnStorage.add(novoVeiculo);

      setVeiculos(response);

      setPlaca('');

    } catch (error) {

      Alert.alert(
        'Erro',
        'Não foi possível adicionar.'
      );
    }
  }

  async function registrarSaida(id: string) {

    try {

      const veiculo =
        veiculos.find(
          item => item.id === id
        );

      if (!veiculo) return;

      const valor =
        calcularValor(
          new Date(veiculo.entrada)
        );

      Alert.alert(
        'Saída Registrada',

`
Placa: ${veiculo.placa}

Valor Final:
R$ ${valor},00
`
      );

      const response =
        await fnStorage.registrarSaida(

          id,

          new Date().toISOString()
        );

      setVeiculos(response);

    } catch (error) {

      Alert.alert(
        'Erro',
        'Não foi possível registrar a saída.'
      );
    }
  }

  async function limparEstacionamento() {

    Alert.alert(
      'Limpar',
      'Deseja apagar todos os veículos?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },

        {
          text: 'Confirmar',

          onPress: async () => {

            await fnStorage.clear();

            setVeiculos([]);

            Alert.alert(
              'Sucesso',
              'Estacionamento limpo.'
            );
          }
        }
      ]
    );
  }

  return (

    <View style={style.container}>

      <Image
        source={require('../../assets/logo.png')}
        style={style.logo}
      />

      <View style={style.form}>

        <Input
          placeholder="Digite a placa"
          onChangeText={formatarPlaca}
          value={placa}
        />

        <Button
          title="Adicionar"
          onPress={adicionarVeiculo}
        />

      </View>

      <View style={style.filterContainer}>

        <TouchableOpacity

          style={[
            style.filterButton,

            filter ===
            FilterStatus.ESTACIONADOS &&

            style.filterActive
          ]}

          onPress={() =>
            setFilter(
              FilterStatus.ESTACIONADOS
            )
          }
        >

          <Text style={style.filterText}>
            Estacionados
          </Text>

        </TouchableOpacity>

        <TouchableOpacity

          style={[
            style.filterButton,

            filter ===
            FilterStatus.SAIDOS &&

            style.filterActive
          ]}

          onPress={() =>
            setFilter(
              FilterStatus.SAIDOS
            )
          }
        >

          <Text style={style.filterText}>
            Saídos
          </Text>

        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={style.clearButton}
        onPress={limparEstacionamento}
      >

        <Text style={style.clearText}>
          Limpar Estacionamento
        </Text>

      </TouchableOpacity>

      <FlatList

        numColumns={2}

        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}

        data={veiculosFiltrados}

        keyExtractor={(item) => item.id}

        contentContainerStyle={style.listContent}

        renderItem={({ item }) => {

          const valorAtual =
            calcularValor(
              new Date(item.entrada)
            );

          return (

            <View style={style.card}>

              <Text style={style.placa}>
                {item.placa}
              </Text>

              <Text style={style.info}>
                Entrada:
                {' '}
                {
                  new Date(item.entrada)
                    .toLocaleTimeString()
                }
              </Text>

              <Text style={style.info}>
                Valor Atual:
                {' '}
                R$ {valorAtual},00
              </Text>

              {item.saida && (

                <Text style={style.saida}>

                  Saída:
                  {' '}

                  {
                    new Date(item.saida)
                      .toLocaleTimeString()
                  }

                </Text>
              )}

              {!item.saida && (

                <Button

                  title="Registrar Saída"

                  onPress={() =>
                    registrarSaida(item.id)
                  }
                />
              )}

            </View>
          );
        }}

        ListEmptyComponent={() => (

          <Text style={style.empty}>
            Nenhum veículo estacionado
          </Text>
        )}

        showsVerticalScrollIndicator={false}

      />

    </View>
  );
}