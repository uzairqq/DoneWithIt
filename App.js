import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me 1" onPress={() => alert("Button 1 Tapped")} />
      <Button
        title="Click Me 2"
        onPress={() =>
          Alert.alert("Button Tapped 2", "You Clicked Button 2", [
            { text: "Yes", onPress: () => console.log("Yes Clicked") },
            { text: "No", onPress: () => console.log("No Clicked") },
          ])
        }
      />
      <Button
        title="Click me 3"
        onPress={() =>
          Alert.prompt("Button 3", "You Clicked button 3", (text) =>
            console.log(text)
          )
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
