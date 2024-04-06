import RNBounceable from "@freakycoder/react-native-bounceable";
import fonts, { fontSize, lineHeight } from "@shared/theme/fonts";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import type { ExtendedTheme } from "@react-navigation/native";
import TextWrapper from "../text-wrapper/TextWrapper";
import { useTheme } from "@react-navigation/native";

const FavoriteButton = () => {
  const theme = useTheme();

  const styles = useMemo(() => createStyles(theme), [theme]);

  const { colors } = theme;

  return (
    <RNBounceable style={styles.wrapper}>
      <Icon
        name={"star"}
        type={IconType.Feather}
        size={fontSize.xl}
        color={colors.primary}
        style={styles.icon}
      />
      <TextWrapper style={styles.text}>Add to Favorites</TextWrapper>
    </RNBounceable>
  );
};

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
    },
    icon: {
      marginRight: 3,
    },
    text: {
      fontFamily: fonts.montserrat.regular,
      fontSize: fontSize.m,
      lineHeight: lineHeight.m,
      color: colors.primary,
      marginLeft: 8,
    },
  });
};

export default FavoriteButton;
