import {
  Button,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";

export function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.firstSection]}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

        <View style={{ ...styles.button }}>
          <Button
            title="Go to Details ... again"
            onPress={() =>
              navigation.push("Details", {
                itemId: Math.floor(Math.random() * 100),
              })
            }
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.button}>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
          </View>

          <View style={styles.button}>
            <Button title="Back" onPress={() => navigation.goBack()} />
          </View>
        </View>

        <View style={styles.button}>
          <Button
            title="Go to first screen in stack"
            onPress={() => navigation.popToTop()}
          />
        </View>
      </View>
      <View style={[styles.section, styles.secondSection]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#D4E3DC",
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  firstSection: { backgroundColor: "#F6F9C8" },
  secondSection: { backgroundColor: "#9EDA95" },
});
