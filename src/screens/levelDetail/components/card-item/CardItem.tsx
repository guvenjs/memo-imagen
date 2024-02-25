import React, { useMemo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Image, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import createStyles from "./CardItem.style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import Text from "@shared-components/text-wrapper/TextWrapper";
import { Word } from "@services/models/words/Word";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface Props {
  style?: CustomStyleProp;
  data: Word;
}

const CardItem: React.FC<Props> = ({ style, data }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { word, examples, image_path } = data;

  return (
    <RNBounceable style={[styles.container, style]}>
      <View style={styles.topContainer}>
        <Icon
          name={Math.random() > 0.5 ? "star" : "star-o"}
          type={IconType.FontAwesome}
          size={24}
          color={colors.primary}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text
          color={Math.random() > 0.5 ? colors.secondary : colors.primary}
          style={styles.word}
        >
          {word}
        </Text>
        <Text style={styles.sentence}>{examples.sentence}</Text>
      </View>

      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={image_path} /> */}
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.paragraph}>{examples.paragraph}</Text>
      </View>

      {/* {renderHeader()}
      <View style={styles.contentContainer}>
        {renderLanguage()}
        {renderStar()}
        {renderFork()}
      </View> */}
    </RNBounceable>
  );
};

export default CardItem;
