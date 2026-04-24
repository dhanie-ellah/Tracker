import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Add from "../components/add";

export default function Stats() {
  return (
    <SafeAreaView style={style.container}>
      <Text>Stats</Text>
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
