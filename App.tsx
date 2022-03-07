import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
//import Navigation from './navigation';

import { HomeScreen } from "./screens/HomeScreen";
import { DetailsScreen } from "./screens/DetailsScreen";
import { CreatePostScreen } from "./screens/CreatePostScreen";
import { AboutTabsScreen } from "./screens/AboutTabsScreen";
import AboutDrawerScreen from "./screens/AboutDrawerScreen";
import { IdProvider } from "./providers/IdProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <IdProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: { backgroundColor: "#f4511e" },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
                headerBackTitleVisible: false,
              }}
            >
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: "My home",
                }}
                initialParams={{ name: "Bill" }}
              />
              <Stack.Screen name="Details" component={DetailsScreen} />
              <Stack.Screen
                name="CreatePost"
                component={CreatePostScreen}
                options={{ title: "Create a Post" }}
              />
              <Stack.Screen name="About" component={AboutTabsScreen} />
              <Stack.Screen name="About-Drawer" component={AboutDrawerScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </IdProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <StatusBar /> */}
      </SafeAreaProvider>
    );
  }
}
