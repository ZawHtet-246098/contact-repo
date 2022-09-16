import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from "../constants/routeName";
import Contacts from "../screens/Contacts";
import ContactDetail from "../screens/ContactDetail";
import CreateContacts from "../screens/CreateContact";
import Settings from "../screens/Settings";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}
      ></HomeStack.Screen>

      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetail}
      ></HomeStack.Screen>

      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContacts}
      ></HomeStack.Screen>

      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
