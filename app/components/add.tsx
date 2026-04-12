import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export default function Add() {
  return (
    <View style={{
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: "#007B83",
      width: 50,
      height: 50,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: 'center',
    }}>
      <Ionicons name="add" size={20} color={'white'}/>
    </View>
  )
}