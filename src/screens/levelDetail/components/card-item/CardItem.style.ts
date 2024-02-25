import { StyleSheet } from "react-native";
import type { ExtendedTheme } from "@react-navigation/native";

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {},
    descriptionTextStyle: {
      marginTop: 8,
    },
    imageContainer: {},
    topContainer: {
      position: "absolute",
      top: 15,
      right: 15,
      flexDirection: "row",
      alignItems: "center",
    },
    contentContainer: {
      flexDirection: "column",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 15,
    },
    bottomContainer: {
      padding: 15,
      flexDirection: "column",
      alignItems: "center",
    },
    word: {
      color: "#cd1332",
      fontSize: 50,
      lineHeight: 58,
      fontWeight: "700",
    },
    sentence: {
      marginVertical: 5,
      fontSize: 16,
      color: colors.calpyse,
    },
    paragraph: {
      fontSize: 16,
      letterSpacing: 0.5,
      color: colors.text,
    },
    languageContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    languageColorStyle: {
      width: 15,
      height: 15,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: colors.borderColor,
      backgroundColor: colors.calpyse,
    },
    starContainer: {
      marginLeft: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    valueTextStyle: {
      marginLeft: 8,
    },
    forkContainer: {
      marginLeft: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: 400,
      height: 450,
      resizeMode: "cover",
    },
  });
};
