import { StyleSheet } from "react-native";
import type { ExtendedTheme } from "@react-navigation/native";
import fonts, { fontSize, lineHeight } from "@shared/theme/fonts";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      height: "100%",
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: colors.background,
    },
    imageContainer: {},
    image: {
      height: 218,
      borderRadius: 24,
      resizeMode: "cover",
    },
    contentContainer: {
      marginVertical: 16,
    },
    word: {
      fontFamily: fonts.montserrat.bold,
      fontSize: fontSize.xxl,
      lineHeight: lineHeight.xxl,
      fontWeight: "600",
    },
    sentence: {
      fontSize: fontSize.m,
      lineHeight: lineHeight.m,
      color: colors.text,
      marginTop: 12,
    },
  });
};
