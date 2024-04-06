import RNBounceable from "@freakycoder/react-native-bounceable";
import fonts, { fontSize, lineHeight } from "@shared/theme/fonts";
import React, { useMemo } from "react";
import { Alert, StyleSheet } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import Tts from "react-native-tts";
import type { ExtendedTheme } from "@react-navigation/native";
import TextWrapper from "../text-wrapper/TextWrapper";
import { useTheme } from "@react-navigation/native";

interface Props {
  word: string;
}

const PronouncationButton = ({ word }: Props) => {
  const theme = useTheme();

  const styles = useMemo(() => createStyles(theme), [theme]);

  const { colors } = theme;

  return (
    <RNBounceable
      style={styles.wrapper}
      onPress={() => {
        Tts.speak(word, {
          iosVoiceId: "com.apple.ttsbundle.Moira-compact",
          rate: 0.5,
          androidParams: {
            KEY_PARAM_PAN: -1,
            KEY_PARAM_VOLUME: 0.5,
            KEY_PARAM_STREAM: "STREAM_MUSIC",
          },
        });
      }}
    >
      <Icon
        name={"volume-2"}
        type={IconType.Feather}
        size={fontSize.xl}
        color={colors.primary}
        style={styles.icon}
      />
      <TextWrapper style={styles.text}>Tap to hear pronounciation</TextWrapper>
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

export default PronouncationButton;
