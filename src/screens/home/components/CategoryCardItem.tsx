import RNBounceable from "@freakycoder/react-native-bounceable";
import ICategoryCardItem from "@screens/home/components/types/ICategoryCardItem";
import React, { useEffect, useMemo, useState } from "react";
import { Image, View, ViewStyle } from "react-native";
import { Text } from "@shared-components";
import createStyles from "./CategoryCardItem.style";
import { useTheme } from "@react-navigation/native";
import storage from "@react-native-firebase/storage";

interface Props {
  onPress: () => void;
  data: ICategoryCardItem;
  style?: ViewStyle;
}

const CategoryCardItem = ({ onPress, data, style }: Props) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (!data) return;
    const getImageUrl = async () => {
      const url = await storage().ref(data.image_path).getDownloadURL();
      setImageUrl(url);
    };

    getImageUrl();
  }, [data]);

  return (
    <RNBounceable onPress={onPress} style={[styles.container, style]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Text h3 bold style={styles.title} numberOfLines={2}>
            {data.title}
          </Text>

          <Text h4 style={styles.description} numberOfLines={3}>
            {data.description}
          </Text>
        </View>
        <View style={styles.bottomContent}>
          <Text h5>
            <Text bold>{data.wordsCount} </Text>
            Words
          </Text>
        </View>
      </View>
    </RNBounceable>
  );
};

export default CategoryCardItem;
