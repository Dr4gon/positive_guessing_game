import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text>
        Open up App.js to start working on your app! by Sarah with 💕{" "}
      </Text>
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
  logo: {
    width: "100%",
    height: "80%",
  },
});
