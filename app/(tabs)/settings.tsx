import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import Add from "../components/add";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Settings() {
  return (
    <SafeAreaView style={style.container}>
      {/* profile card */}
      <View></View>
      {/* account section */}
      <View>
        <Text>Account</Text>
        {/* account card */}
        <View>
          {/* personal information */}
          <View>
            <View>
              <View>
                <Ionicons name="person" />
              </View>
              <View>
                <Text>Personal Information</Text>
                <Text>Update your details</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward-outline" />
          </View>
          {/* security */}
          <View>
            <View>
              <View>
                <Ionicons />
              </View>
              <View>
                <Text>Personal Information</Text>
                <Text>Update your details</Text>
              </View>
            </View>
            <Ionicons />
          </View>
        </View>
      </View>
      {/* notification section */}
      <View>
        <Text>Notifications</Text>
        {/* notifications card */}
        <View>
          <View>
            <View>
              <Ionicons name="person" />
            </View>
            <View>
              <Text>Personal Information</Text>
              <Text>Update your details</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward-outline" />
        </View>
      </View>
      {/* app preference section */}
      <View>
        <Text>App preferences</Text>
        {/* app preference card */}
        <View>
          {/* dark mode */}
          <View>
            <View>
              <View>
                <Ionicons name="person" />
              </View>
              <View>
                <Text>Personal Information</Text>
                <Text>Update your details</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward-outline" />
          </View>
          {/* language */}
          <View>
            <View>
              <View>
                <Ionicons />
              </View>
              <View>
                <Text>Personal Information</Text>
                <Text>Update your details</Text>
              </View>
            </View>
            <Ionicons />
          </View>
          {/* signout */}
          <View>
            <View>
              <View>
                <Ionicons />
              </View>
              <View>
                <Text>Personal Information</Text>
                <Text>Update your details</Text>
              </View>
            </View>
            <Ionicons />
          </View>
        </View>
      </View>
      <Add />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  card: {
    borderRadius: 25,
    padding: 20,
    gap: 10,
  },
});
