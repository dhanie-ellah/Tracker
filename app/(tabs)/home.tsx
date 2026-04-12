import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Add from '../components/add'

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Add/>
    </SafeAreaView>
  );
}
