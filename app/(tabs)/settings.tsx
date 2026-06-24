import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import Add from "../components/add";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function Settings() {
  const [notificationOn, setNotificationOn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView className=" p-8 pb-0 border" contentContainerStyle={{paddingBottom: 50}}>
        {/* profile card */}
        <View style={[styles.sectionContainer, {backgroundColor: "white", alignItems:  "center", justifyContent: "center", gap: 5}]}>
          <View>
            <Image source={{uri: "https://placehold.net/avatar-4.png"}} width={100} height={100}/>
          </View>
          <Text style={styles.childTitleText}>Braide, Daniella Biobele</Text>
          <Text style={styles.childText}>Chief Executive Officer</Text>
        </View>
        {/* account section */}
        <View>
          <Text style={styles.sectionTitle}>Account</Text>
          {/* account card */}
          <View style={styles.sectionContainer}>
            {/* personal information */}
            <View style={styles.childContainer}>
              <View style={styles.childLeft}>
                <View style={styles.childIconContainer}>
                  <Ionicons name="person-outline" color={"#007B83"} size={20} />
                </View>
                <View>
                  <Text style={styles.childTitleText}>
                    Personal Information
                  </Text>
                  <Text style={styles.childText}>Update your details</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={15}
                color={"#374151"}
              />
            </View>
            {/* security */}
            <View style={styles.childContainer}>
              <View style={styles.childLeft}>
                <View style={styles.childIconContainer}>
                  <Ionicons name="shield-outline" color={"#007B83"} size={20} />
                </View>
                <View>
                  <Text style={styles.childTitleText}>Security</Text>
                  <Text style={styles.childText}>Password and MFA</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={15}
                color={"#374151"}
              />
            </View>
          </View>
        </View>
        {/* notification section */}
        <View>
          <Text style={styles.sectionTitle}>Notifications</Text>
          {/* notifications card */}
          <View style={styles.sectionContainer}>
            <View style={styles.childContainer}>
              <View style={styles.childLeft}>
                <View style={styles.childIconContainer}>
                  <Ionicons
                    name="notifications-outline"
                    color={"#007B83"}
                    size={20}
                  />
                </View>
                <View>
                  <Text style={styles.childTitleText}>Push Notifications</Text>
                  <Text style={styles.childText}>Manage app alerts</Text>
                </View>
              </View>
              <Switch
                trackColor={{ false: "#374151", true: "#007B83" }}
                thumbColor={"#f4f3f4"}
                value={notificationOn}
                onValueChange={() => setNotificationOn(!notificationOn)}
                className=" scale-y-110"
              />
            </View>
          </View>
        </View>
        {/* app preference section */}
        <View>
          <Text style={styles.sectionTitle}>App preferences</Text>
          {/* app preference card */}
          <View style={styles.sectionContainer}>
            {/* dark mode */}
            <View style={styles.childContainer}>
              <View style={styles.childLeft}>
                <View style={styles.childIconContainer}>
                  <Ionicons name="moon-outline" color={"#007B83"} size={20} />
                </View>
                <View>
                  <Text style={styles.childTitleText}>Dark Mode</Text>
                  <Text style={styles.childText}>
                    Adjust your visual Experience
                  </Text>
                </View>
              </View>
              <Switch
                trackColor={{ false: "#374151", true: "#007B83" }}
                thumbColor={"#f4f3f4"}
                value={darkMode}
                onValueChange={() => setDarkMode(!darkMode)}
                className=" scale-y-110"
              />
            </View>
            {/* language */}
            <View style={styles.childContainer}>
              <View style={styles.childLeft}>
                <View style={styles.childIconContainer}>
                  <Ionicons name="globe-outline" color={"#007B83"} size={20} />
                </View>
                <View>
                  <Text style={styles.childTitleText}>Language</Text>
                  <Text style={styles.childText}>English (US)</Text>
                </View>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={15}
                color={"#374151"}
              />
            </View>
            {/* signout */}
            <View style={styles.childContainer}>
              <View style={styles.childLeft}>
                <View style={styles.childIconContainer}>
                  <Ionicons name="exit-outline" color={"red"}
                    size={20} />
                </View>
                <View>
                  <Text style={[styles.childTitleText, {color: "red"}]}>Sign Out</Text>
                  <Text style={{color: "red"}}>End your current session</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Add />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    textTransform: "uppercase",
    color: "#374151",
    letterSpacing: 0.5,
    padding: 15,
    paddingBottom: 5,
    fontWeight: 700,
  },
  sectionContainer: {
    backgroundColor: "#e5e7eb",
    padding: 20,
    borderRadius: 25,
    gap: 20,
  },
  childContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  childLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  childIconContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
  childTitleText: {
    fontWeight: 700,
    fontSize: 16,
  },
  childText: {
    color: "#374151",
    fontSize: 12,
  },
});
