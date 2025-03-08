import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    console.log("Eingegebene Handynummer:", phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text>Gib deine Handynummer ein:</Text>
      <TextInput
        style={styles.input}
        placeholder="Handynummer"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Text>Möchtest du mit dieser Nummer fortfahren?</Text>
      <Text>Hinweise: Spielen ist nur mit Profil möglich.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ja" onPress={handleSubmit} />
        <Button title="Nein" onPress={handleSubmit} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    width: "100%",
    height: "80%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
});
