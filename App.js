import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App Execeuted Loggin");
  console.warn("App Execeuted Waning");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Uzaior Oqnbal</Text>
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
});
