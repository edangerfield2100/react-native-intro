import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export function HomeScreen({ route, navigation }) {
  const { name } = route.params;
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log(route.params?.post);
    }
  }, [route.params?.post]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>Welcome to the Home Screen</Text>
      <Text>Count: {count}</Text>
      <Text>Hello: {name} (testing passing param)</Text>
      <View style={styles.button}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here",
            })
          }
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Go To Create Post"
          onPress={() => navigation.navigate("CreatePost")}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Go To About Tabs Screen"
          onPress={() => navigation.navigate("About", { id: 123 })}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Go To About Drawer Screen"
          onPress={() => navigation.navigate("About-Drawer")}
        />
      </View>
      <Text>Post: {route.params?.post}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", marginTop: 30 },
  button: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#D4E3DC",
    marginTop: 10,
  },
  textLarge: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
});
