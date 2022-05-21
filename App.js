import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  View,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.buttonStyle}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: 70,
        }}
      ></View>
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
