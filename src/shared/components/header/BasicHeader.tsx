import React, { useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  useNavigation,
  useTheme,
  ExtendedTheme,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { fontSize } from "@shared/theme/fonts";

// interface Props {
//   title?: string;
// }

const BasicHeader = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={["top", "right", "left"]} style={styles.safeArea}>
      <TouchableOpacity onPress={handleGoBack} style={styles.button}>
        <Icon
          type={IconType.Feather}
          name="chevron-left"
          size={fontSize.xxxl}
          style={styles.icon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    safeArea: {
      backgroundColor: colors.secondaryDark,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 15,
    },
    button: {
      paddingBottom: 15,
    },
    icon: {
      color: colors.primary,
    },
  });
};

export default BasicHeader;
