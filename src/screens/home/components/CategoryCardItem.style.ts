import { StyleSheet } from "react-native";
import type { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: colors.secondaryDark,
      flexWrap: "wrap",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    image: {
      flex: 0.6,
      height: 125,
      borderRadius: 10,
    },
    content: {
      paddingTop: 5,
      flex: 1,
      paddingLeft: 15,
      justifyContent: "space-between",
    },
    topContent: {},
    bottomContent: {
      alignSelf: "flex-end",
    },
    title: {},
    description: {
      marginVertical: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    words: {
      fontWeight: "900",
    },
  });
};
