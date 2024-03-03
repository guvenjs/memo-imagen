import RNBounceable from "@freakycoder/react-native-bounceable";
import ICategoryCardItem from "@screens/home/components/types/ICategoryCardItem";
import React, { useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "@shared-components";
import createStyles from "./CategoryCardItem.style";
import { useTheme } from "@react-navigation/native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

interface Props {
  onPress: () => void;
  data: ICategoryCardItem;
  style?: ViewStyle;
}

const CategoryCardItem = ({ onPress, data, style }: Props) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <RNBounceable onPress={onPress} style={[styles.container, style]}>
      <View style={styles.topContainer}>
        <Icon
          name={data.icon}
          type={IconType.MaterialCommunityIcons}
          size={34}
          style={styles.icon}
        />
        <Text h1 style={styles.title}>
          {data.title}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text h1 style={styles.wordsCount}>
          {data.wordsCount}
        </Text>
        <Text h1 style={styles.bottomDescriptionText}>
          Words
        </Text>
      </View>
    </RNBounceable>
  );
};

export default CategoryCardItem;
