import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { useIdStore } from "../hooks/useIdStore";

export default function GeneralAboutScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const idStore = useIdStore();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>General About Screen!</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
        style={{
          backgroundColor: "#CDF9C8",
          borderWidth: 1,
          height: 30,
          marginTop: 25,
          width: 100,
        }}
      />
      <Text>Name: {name}</Text>
      <Text>Prev Name: {prevName.current}</Text>

      <TextInput
        value={idStore.id}
        onChangeText={idStore.setId}
        placeholder="Enter ID"
        style={{
          backgroundColor: "#CDF9C8",
          borderWidth: 1,
          height: 30,
          marginTop: 25,
          width: 100,
        }}
      />
      <Text>ID: {idStore.id}</Text>
    </View>
  );
}
