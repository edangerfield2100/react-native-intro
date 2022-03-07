import { createDrawerNavigator } from "@react-navigation/drawer";
import DetailsAboutScreen from "./DetailsAboutScreen";
import GeneralAboutScreen from "./GeneralAboutScreen";

export default function AboutDrawerScreen() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="General" component={GeneralAboutScreen} />
      <Drawer.Screen name="Details" component={DetailsAboutScreen} />
    </Drawer.Navigator>
  );
}
