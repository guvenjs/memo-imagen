import type { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import fonts from "@fonts";

const styles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
      marginTop: 30,
      paddingHorizontal: 15,
    },
    titleWrapper: {
      width: "100%",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      paddingTop: 15,
      paddingBottom: 30,
    },
    title: {
      fontSize: 34,
      lineHeight: 48,
      fontWeight: "600",
      fontFamily: fonts.montserrat.semiBold,
      color: colors.primary,
    },
  });
};

export default styles;
