import * as React from "react";
import { Button, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GeneralAboutScreen from "./GeneralAboutScreen";
import DetailsAboutScreen from "./DetailsAboutScreen";

const Tab = createBottomTabNavigator();

export function AboutTabsScreen({ route, navigation }) {
  // console.log(route);
  const { id } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="General" component={GeneralAboutScreen} />
      <Tab.Screen name="Details" component={DetailsAboutScreen} />
    </Tab.Navigator>
  );
}
