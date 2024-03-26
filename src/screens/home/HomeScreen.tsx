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
import { capitalizeFirstLetter } from "utils";
import { Title } from "@shared/components";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "@features/categories/categoriesSlice";
import firestore from "@react-native-firebase/firestore";

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const sharedStyles = useMemo(() => createSharedStyles(theme), [theme]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategories() as any);
  // }, [dispatch]);

  // const {
  //   loading,
  //   categories,
  // }: { loading: boolean; categories: ICategoryCardItem[] } = useSelector(
  //   (state: any) => state.categories
  // );

  // useEffect(() => {
  //   console.log("eness", categories);
  // }, [categories]);

  const [categories, setCategories] = useState([] as ICategoryCardItem[]);

  useEffect(() => {
    firestore()
      .collection("categories")
      .get()
      .then((snapshot) => {
        const categories = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: capitalizeFirstLetter(doc.data().name),
          icon: doc.data().name,
          wordsCount: 100,
          ...doc.data(),
        }));

        setCategories(categories);
      });
  }, []);

  // const categories: ICategoryCardItem[] = firestore().collection("categories").get().then((snapshot) => {
  //   const categories = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     title: doc.data().name,
  //     icon: doc.data().name,
  //     wordsCount: 100,
  //     ...doc.data(),
  //   }));

  //   return categories;
  // }

  // const categories: ICategoryCardItem[] = data.categories.map((item) => ({
  //   id: item.id,
  //   title: capitalizeFirstLetter(item.name),
  //   icon: item.icon,
  //   wordsCount: item.words.length,
  // }));

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
