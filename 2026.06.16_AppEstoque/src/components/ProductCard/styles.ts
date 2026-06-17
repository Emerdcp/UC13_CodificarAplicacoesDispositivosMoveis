import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 180,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: "center",
    padding: 12,
    margin: 8,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },

  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  quantity: {
    marginTop: 4,
    color: colors.gray[600],
  },
});