import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Add from "../components/add";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      {/******************* TODO Progress card start *******************/}
      <View style={style.progressCard}>
        <View style={style.progressCardText}>
          <Text style={style.headerText}>Daily Progress</Text>
          <Text style={style.paragraphText}>
            12 of 16 tasks completed
          </Text>
          <Text style={style.status}>On Track</Text>
        </View>
        <CircularProgress
          value={71}
          valueSuffix={"%"}
          progressValueColor={"#007B83"}
          progressValueStyle={{color: "#007B83", fontSize: 20}}
          // valueSuffixStyle={{color: "#007B83"}}
          radius={35}
          // duration={1000}
          maxValue={100}
          inActiveStrokeColor={"#007B83"}
          inActiveStrokeOpacity={0.2}
          activeStrokeColor={"#007B83"}

        />
      </View>
      {/******************* TODO Progress card end *******************/}
      <Add />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  // TODO Progress card start
  progressCard: {
    backgroundColor:  'rgba(0, 123, 131, 0.05)' ,
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },
  progressCardText:{
    gap: 5,
  },
  headerText: {
    fontSize: 35,
    fontFamily: "Inter_700Bold",
    letterSpacing: -2.0,
  },
  paragraphText: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "gray",
  },
  status: {
    backgroundColor:  'rgba(0, 123, 131, 0.1)' ,
    paddingHorizontal: 20,
    paddingVertical: 5,
    textTransform: "uppercase",
    color:  'rgb(0, 123, 131)' ,
    borderRadius: 100,
    display: "flex",
    fontFamily: "Inter_700Bold",
    alignSelf: "flex-start",
  },
  // TODO Progress card end
});
