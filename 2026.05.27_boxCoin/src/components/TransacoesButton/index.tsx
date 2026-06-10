import { View, Text } from 'react-native'

import { styles } from './style'
import { colors } from '@/theme/colors'

import { Opcoes } from './opcoes'

import { TransacoesTypes } from '@/utils/TransacoesType'

type Props = {
  selected: TransacoesTypes,
  onChange: (type: TransacoesTypes) => void

}

export function TransacoesButton({ selected, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Opcoes
        isSelected={selected === TransacoesTypes.Input}
        title="Guardar"
        icon="arrow-upward"
        selectedColor={colors.blue[500]}
        onPress={() => onChange(TransacoesTypes.Input)}
      />
      <Opcoes
        isSelected={selected === TransacoesTypes.Output}
        title="Resgatar"
        icon="arrow-downward"
        selectedColor={colors.red[400]}
        onPress={() => onChange(TransacoesTypes.Output)}
      />
    </View>
  )
}