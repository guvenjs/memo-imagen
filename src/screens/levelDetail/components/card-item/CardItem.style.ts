import { StyleSheet } from "react-native";
import type { ExtendedTheme } from "@react-navigation/native";
import fonts, { fontSize, lineHeight } from "@shared/theme/fonts";
import { ScreenHeight } from "@freakycoder/react-native-helpers";

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
      backgroundColor: colors.primary,
      height: ScreenHeight * 0.4,
      borderRadius: 16,
      resizeMode: "cover",
    },
    contentContainer: {
      marginVertical: 24,
    },
    word: {
      fontFamily: fonts.montserrat.bold,
      fontSize: fontSize.xxxl,
      lineHeight: lineHeight.xxxl,
      fontWeight: "600",
    },
    sentence: {
      fontSize: fontSize.l,
      lineHeight: lineHeight.l,
      color: colors.text,
      marginTop: 12,
    },
  });
};
