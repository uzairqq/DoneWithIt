import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={() => console.log("Clicked")}>
        Open up App.js to start working on your app! Uzaior Oqnbal....! Open up
        App.js to start working on your app! Uzaior Oqnbal....! Open up App.js
        to start working on your app! Uzaior Oqnbal....!
      </Text>

      <TouchableWithoutFeedback
        onPress={() => console.log("Touchable Clicked")}
      >
        <Image
          source={{ uri: "https://picsum.photos/200", height: 100, width: 100 }}
          style={{ height: 100, width: 100 }}
        />
      </TouchableWithoutFeedback>

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
