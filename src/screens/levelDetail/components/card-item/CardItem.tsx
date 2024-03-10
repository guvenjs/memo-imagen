import React, { useEffect, useMemo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Image, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import createStyles from "./CardItem.style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import { Text } from "@shared-components";
import { Word } from "@services/models/words/Word";
import storage from "@react-native-firebase/storage";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface Props {
  style?: CustomStyleProp;
  data: Word;
}

const CardItem: React.FC<Props> = ({ style, data }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  const { word, examples, image_path } = data;

  useEffect(() => {
    if (!image_path) return;
    const getImageUrl = async () => {
      const url = await storage().ref(image_path).getDownloadURL();
      setImageUrl(url);
    };

    getImageUrl();
  }, [image_path]);

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
        {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
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
