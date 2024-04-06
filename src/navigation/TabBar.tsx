import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  return (
    <View style={{ flexDirection: "row", height: 80 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let label = options.tabBarLabel;
        if (label === undefined) {
          label = options.title;
        }
        if (label === undefined) {
          label = route.name;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
