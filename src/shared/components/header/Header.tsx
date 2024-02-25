import React, { useMemo } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  useNavigation,
  useTheme,
  ExtendedTheme,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

interface Props {
  title?: string;
}

const Header = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon
          type={IconType.MaterialCommunityIcons}
          name="chevron-left"
          size={34}
          style={styles.icon}
        />
      </TouchableOpacity>
      {/* <Text style={styles.title}>Header</Text> */}
    </SafeAreaView>
  );
};

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
      backgroundColor: colors.secondary,
    },
    icon: {
      color: colors.primary,
    },
    // title: {
    //   fontSize: 24,
    // },
  });
};

export default Header;
