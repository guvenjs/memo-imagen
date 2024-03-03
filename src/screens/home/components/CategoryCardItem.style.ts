import { StyleSheet } from "react-native";
import type { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secondaryDark,
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 10,
      paddingVertical: 30,
      paddingHorizontal: 15,
    },
    topContainer: {
      flex: 1,
      width: "100%",
      alignItems: "center",
    },
    icon: {
      color: colors.primary,
      marginBottom: 10,
    },
    title: {
      lineHeight: 42,
      fontWeight: "700",
      color: colors.primary,
      textAlign: "center",
    },
    bottomContainer: {
      marginTop: 15,
      flexDirection: "row",
      alignItems: "center",
    },
    wordsCount: {
      color: colors.primaryLight,
      fontWeight: "900",
    },
    bottomDescriptionText: {
      color: colors.primaryLight,
      fontWeight: "700",
      paddingLeft: 5,
    },
  });
};
