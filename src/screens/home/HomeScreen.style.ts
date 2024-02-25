import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
      marginTop: 30,
      paddingHorizontal: 15,
    },
    categoryWrapper: {
      flex: 1,
      width: "100%",
      marginBottom: 15,
    },
    categoryCard: {
      marginBottom: 15,
    },
  });
};
