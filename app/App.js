import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

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
      <Text style={styles.text}>Gib deine Handynummer ein:</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Text style={styles.text}>Möchtest du mit dieser Nummer fortfahren?</Text>
      <Text style={styles.text}>
        Hinweise: Spielen ist nur mit Profil möglich.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonYes} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Ja</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNo} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Nein</Text>
        </TouchableOpacity>
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
    backgroundColor: "#334158",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "5%",
  },
  text: {
    color: "#94C671",
  },
  logo: {
    width: "100%",
    height: "80%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: "10px",
    width: "60%",
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonYes: {
    backgroundColor: "#94C671",
    padding: 10,
    borderRadius: 5,
  },
  buttonNo: {
    backgroundColor: "#CF404D",
    padding: 10,
    borderRadius: 5,
  },
});
