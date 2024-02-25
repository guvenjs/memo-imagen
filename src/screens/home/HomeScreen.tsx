import React, { useMemo } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./HomeScreen.style";
import { useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import ICategoryCardItem from "@screens/home/components/types/ICategoryCardItem";
import CategoryCardItem from "./components/CategoryCardItem";
import { FlashList } from "@shopify/flash-list";
import data from "data";
import { capitalizeFirstLetter } from "utils";

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const categories: ICategoryCardItem[] = data.categories.map((item) => ({
    id: item.id,
    title: capitalizeFirstLetter(item.name),
    icon: item.icon,
    wordsCount: item.words.length,
  }));

  const renderCategories = () => (
    <View style={styles.categoryWrapper}>
      <FlashList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={1}
        estimatedItemSize={150}
        renderItem={({ item }) => (
          <CategoryCardItem
            data={item}
            onPress={() =>
              NavigationService.push(SCREENS.LEVEL_DETAIL, { id: item.id })
            }
            style={styles.categoryCard}
          />
        )}
      />
    </View>
  );

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      {renderCategories()}
    </SafeAreaView>
  );
};

export default HomeScreen;