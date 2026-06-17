import { StyleSheet } from "react-native";

import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.gray[100],
  },

  backText: {
    fontSize: 18,
    color: colors.blue[500],
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: colors.white,
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  textArea: {
    height: 100,
    paddingTop: 12,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: colors.blue[500],
    height: 55,
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  backButton: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

});