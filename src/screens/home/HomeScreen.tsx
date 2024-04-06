import React, { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./HomeScreen.style";
import createSharedStyles from "@shared-styles";
import { useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import ICategoryCardItem from "@screens/home/components/types/ICategoryCardItem";
import CategoryCardItem from "./components/CategoryCardItem";
import { FlashList } from "@shopify/flash-list";
import { Title } from "@shared/components";
import firestore from "@react-native-firebase/firestore";

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const sharedStyles = useMemo(() => createSharedStyles(theme), [theme]);

  const [categories, setCategories] = useState([] as ICategoryCardItem[]);

  const fetchCategories = async () => {
    try {
      const snapshot = await firestore().collection("categories").get();
      const data: ICategoryCardItem[] = snapshot.docs.map((doc) => {
        const { id } = doc;
        const { name, description, image_path } = doc.data();
        return {
          id,
          title: name,
          description: description,
          icon: name,
          image_path: image_path,
          wordsCount: 100,
        };
      });
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const renderHeader = () => {
    return <Title title="Categories" />;
  };

  const renderCategories = () => (
    <>
      <View style={styles.categoryWrapper}>
        <FlashList
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={1}
          estimatedItemSize={150}
          ListHeaderComponent={renderHeader}
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
    </>
  );

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={sharedStyles.container}
    >
      {renderCategories()}
    </SafeAreaView>
  );
};

export default HomeScreen;
