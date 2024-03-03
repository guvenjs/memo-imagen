import React, { useMemo } from "react";
import { View } from "react-native";
import { Text } from "@shared-components";
import { useTheme } from "@react-navigation/native";
import createSharedStyles from "@shared-styles";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  const theme = useTheme();
  const sharedStyles = useMemo(() => createSharedStyles(theme), [theme]);

  return (
    <View style={sharedStyles.titleWrapper}>
      <Text style={sharedStyles.title}>{title}</Text>
    </View>
  );
};

export default Title;
