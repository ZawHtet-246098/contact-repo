import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from "../constants/routeName";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
