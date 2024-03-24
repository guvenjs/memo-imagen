import React, { useEffect, useMemo } from "react";
import { Image, View } from "react-native";
import createStyles from "./CardItem.style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import { Text } from "@shared-components";
import { Word } from "@services/models/words/Word";
import storage from "@react-native-firebase/storage";
import FavoriteButton from "@shared/components/card/FavoriteButton";
import PronouncationButton from "@shared/components/card/PronouncationButton";

interface Props {
  data: Word;
}

const CardItem: React.FC<Props> = ({ data }) => {
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

  const renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        {imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.word}>{word}</Text>
        <Text style={styles.sentence}>&ldquo;{examples.sentence}&rdquo;</Text>
      </View>
    );
  };

  return (
    <RNBounceable style={styles.container}>
      {renderImage()}
      {renderContent()}
      <PronouncationButton />
      <FavoriteButton />
    </RNBounceable>
  );
};

export default CardItem;
