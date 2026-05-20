import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";

import { style } from './style';

import {
  FilterStatus
} from "@/types/FilterStatus";

type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
}

export function Filter({
  status,
  isActive,
  ...rest
}: Props) {

  return (

    <TouchableOpacity

      style={[
        style.container,
        {
          opacity: isActive ? 1 : 0.5
        }
      ]}

      {...rest}
    >

      <Text style={style.title}>

        {
          status ===
          FilterStatus.ESTACIONADOS

            ? "Estacionados"

            : "Saídos"
        }

      </Text>

    </TouchableOpacity>
  )
}