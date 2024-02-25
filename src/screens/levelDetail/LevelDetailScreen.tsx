import React, { useMemo } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./LevelDetailScreen.style";
import CardItem from "./components/card-item/CardItem";
import { useTheme } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "navigation/types/RootStackParamList";
import data from "data";

type Props = NativeStackScreenProps<RootStackParamList, "LevelDetail">;

const LevelDetailScreen = ({ route }: Props) => {
  const { id } = route.params;

  const category = data.categories.find((category) => category.id === id);
  const words = category?.words || [];

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const renderList = () => (
    <Carousel
      data={words}
      itemWidth={ScreenWidth}
      sliderWidth={ScreenWidth}
      renderItem={({ item }) => <CardItem data={item} />}
    />
  );

  const renderContent = () => <View>{renderList()}</View>;

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      {renderContent()}
    </SafeAreaView>
  );
};

export default LevelDetailScreen;
