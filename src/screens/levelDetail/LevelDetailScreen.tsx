/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./LevelDetailScreen.style";
import createSharedStyles from "shared/styles";
import CardItem from "./components/card-item/CardItem";
import { useTheme } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "navigation/types/RootStackParamList";
import data from "data";
import firestore from "@react-native-firebase/firestore";
import { Word } from "@src/services/models/words/Word";

type Props = NativeStackScreenProps<RootStackParamList, "LevelDetail">;

const LevelDetailScreen = ({ route }: Props) => {
  const { id } = route.params;

  const category = data.categories.find((category) => category.id === id);
  // const words = category?.words || [];

  const [words, setWords] = useState<Word[]>([]);

  const fetchWords = async () => {
    try {
      const snapshot = await firestore()
        .collection(`categories/${id}/words`)
        .get();
      const data: Word[] = snapshot.docs.map((doc) => {
        const { id } = doc;
        return {
          id,
          ...doc.data(),
        } as Word;
      });
      setWords(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const sharedStyles = useMemo(() => createSharedStyles(theme), [theme]);

  const renderList = () => (
    <Carousel
      data={words}
      itemWidth={ScreenWidth}
      layout={"stack"}
      layoutCardOffset={18}
      sliderWidth={ScreenWidth}
      renderItem={({ item }) => <CardItem data={item} />}
    />
  );

  const renderContent = () => <View>{renderList()}</View>;

  return <View style={styles.container}>{renderContent()}</View>;
};

export default LevelDetailScreen;
