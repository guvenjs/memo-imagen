import type { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import fonts, { fontSize, lineHeight } from "@fonts";

const styles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
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
      fontSize: fontSize.xxxl,
      lineHeight: lineHeight.xxxl,
      fontWeight: "600",
      fontFamily: fonts.montserrat.semiBold,
      color: colors.primary,
    },
  });
};

export default styles;
