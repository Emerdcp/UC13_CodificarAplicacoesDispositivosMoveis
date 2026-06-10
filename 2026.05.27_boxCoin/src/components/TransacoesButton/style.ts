import { StyleSheet } from 'react-native';
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    height: 42,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    overflow: 'hidden',

  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    gap: 8
  },
  titulo: {
    fontSize: 14,
    color: colors.gray[500]
  }
})