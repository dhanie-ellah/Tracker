import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import Add from "../components/add";

export default function Settings() {
  return (
    <SafeAreaView style={style.container}>
      <Text>Settings</Text>
      <Add/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})
