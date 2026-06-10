import { ColorValue, Pressable, PressableProps, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/theme/colors';

import { styles } from './style';

type Props = PressableProps & {
  isSelected: boolean,
  title: string,
  icon: keyof typeof MaterialIcons.glyphMap,
  selectedColor: ColorValue
}

export function Opcoes({
  isSelected,
  title,
  icon,
  selectedColor,
  ...rest
}: Props) {
  return (
    <Pressable style={[styles.option, isSelected && { backgroundColor: selectedColor }]} {...rest}>
      <MaterialIcons name={icon} size={24} color={isSelected ? colors.white : colors.gray[500]} />

      <Text style={[styles.titulo, isSelected && { color: colors.white }]}>
        {title}
      </Text>
    </Pressable>
  )
}