import { ExtendedTheme, useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import createSharedStyles from "@shared-styles";
import SplashScreen from "react-native-splash-screen";

const Splash = () => {
  const theme = useTheme();
  const sharedStyles = useMemo(() => createSharedStyles(theme), [theme]);
  const styles = useMemo(() => createStyles(theme), [theme]);

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1750);
  }, []);
  return <></>;
};

export default Splash;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create({});
};
