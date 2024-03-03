import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;

  return StyleSheet.create({
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
