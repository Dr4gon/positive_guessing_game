import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryPrefix, setCountryPrefix] = useState("");

  useEffect(() => {
    const loadPhoneNumber = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem("phoneNumber");
        console.log("The stored phone number is", storedPhoneNumber);
        if (storedPhoneNumber !== null) {
          setPhoneNumber(storedPhoneNumber);
        }
      } catch (error) {
        console.error("Failed to load phone number", error);
      }
    };

    loadPhoneNumber();
  }, []);

  const handleSubmit = () => {
    Keyboard.dismiss();
    setPhoneNumber(phoneNumber);
    setCountryPrefix(countryPrefix);
    console.log("Landesvorwahl:", countryPrefix);
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
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.inputPrefix}
            inputMode="text"
            value={countryPrefix}
            onChangeText={setCountryPrefix}
          />
          <TextInput
            style={styles.input}
            inputMode="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <Text style={styles.text}>
          Möchtest du mit dieser Nummer fortfahren?
        </Text>
        <Text style={styles.text}>
          Hinweise: Spielen ist nur mit Profil möglich.
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonYes} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Ja</Text>
          </Pressable>
          <Pressable style={styles.buttonNo} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Nein</Text>
          </Pressable>
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
    justifyContent: "space-evenly",
    width: "100%",
    padding: "10%",
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
    color: "#94C671",
  },
  inputPrefix: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: "10px",
    width: "20%",
    paddingHorizontal: 10,
    color: "#94C671",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonYes: {
    backgroundColor: "#94C671",
    padding: 10,
    borderRadius: 5,
    minWidth: 80,
    alignItems: "center",
  },
  buttonNo: {
    backgroundColor: "#CF404D",
    padding: 10,
    borderRadius: 5,
    minWidth: 80,
    alignItems: "center",
  },
});
