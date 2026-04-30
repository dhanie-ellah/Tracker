import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Button,
  Modal,
  SectionList,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Add() {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#007B83",
          width: 50,
          height: 50,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="add"
          size={20}
          color={"white"}
          onPress={() => setVisible(true)}
        />
      </View>

      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View>
          <Button title="X" onPress={() => setVisible(false)} />
          <Text>Add Item</Text>
        </View>
        <View>
          <View>
            <Text>Task title</Text>
            <TextInput placeholder="Input the text title here..." />
          </View>
          <View>
            <Text>Categories</Text>
            <View>
              <View>
                <Ionicons icon={"briefcase"} />
                <Text>Work</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Notes & details</Text>
            <TextInput placeholder="write every important note details here..." />
          </View>
          <View>
            <Text>Deadline date</Text>
            
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
