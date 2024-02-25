/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useColorScheme } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// ? Screens
import HomeScreen from "@screens/home/HomeScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import LevelDetailScreen from "@screens/levelDetail/LevelDetailScreen";
import Header from "@shared-components/header/Header";
/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme } from "@theme/themes";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number
  ) => {
    let iconName = "home";
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? "home" : "home-outline";
        break;
      case SCREENS.SEARCH:
        iconName = focused ? "search" : "search-outline";
        break;
      case SCREENS.NOTIFICATION:
        iconName = focused ? "notifications" : "notifications-outline";
        break;
      case SCREENS.PROFILE:
        iconName = focused ? "account" : "account-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return (
      <Icon
        name={iconName}
        type={IconType.MaterialCommunityIcons}
        size={size}
        color={color}
      />
    );
  };

  const renderTabNavigation = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    const { colors } = theme;
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) =>
            renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.primaryLight,
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: {
            backgroundColor: isDarkMode ? colors.black : colors.white,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        {/* <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} /> */}
        {/* <Tab.Screen
          name={SCREENS.NOTIFICATION}
          component={NotificationScreen}
        /> */}
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={renderTabNavigation} />
        {/* <Drawer.Screen name={SCREENS.HOME} component={HomeScreen} /> */}
        <Stack.Screen
          name={SCREENS.LEVEL_DETAIL}
          component={(props: any) => <LevelDetailScreen {...props} />}
          options={{
            headerShown: true,
            header: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
