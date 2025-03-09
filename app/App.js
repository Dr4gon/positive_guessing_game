import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    Keyboard.dismiss();
    console.log("Eingegebene Handynummer:", phoneNumber);
  };

  return (
    <KeyboardAvoidingView behavior={"position"} style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Gib deine Handynummer ein:</Text>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Text style={styles.text}>
          Möchtest du mit dieser Nummer fortfahren?
        </Text>
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
    </KeyboardAvoidingView>
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
    // https://stackoverflow.com/questions/34180629/react-native-fit-image-in-containing-view-not-the-whole-screen-size
    width: "90%",
    height:
      Platform.OS === "ios" || Platform.OS === "android" ? undefined : "100%", // fixes web, windows and macos view for development
    aspectRatio: 1,
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
