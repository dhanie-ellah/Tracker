import { StyleSheet, Text, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppIntroSlider from "react-native-app-intro-slider";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Onboarding() {
  const router = useRouter();
  const insets = useSafeAreaInsets()

  const slides = [
    {
      key: "slide1",
      title: "Smart Daily Planner",
      text: "Design your focus. Achieve your goals with intentional clarity.",
      image:
        "https://images.unsplash.com/photo-1662027008658-b615840c7deb?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      key: "slide2",
      title: "Easily Structure your day.",
      text: "Group tasks by Work, Health or Projects to keep your mind clear and your flow uninterrupted.",
      image:
        "https://plus.unsplash.com/premium_photo-1706191097326-cd317671d1fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      key: "slide3",
      title: "Visualize your progress.",
      text: "Track your achievements and stay motivated on your journey to success.",
      image:
        "https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => (
        <View style={[style.container, {paddingBottom: insets.bottom}]}>
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={style.image}
          />
          <View style={{ padding: 20, gap: 5 }}>
            <Text style={style.headingText}>{item.title}</Text>
            <Text style={style.paragraphText}>{item.text}</Text>

            {/* <TouchableOpacity
              style={style.button}
              onPress={() => router.push("/second")}
            >
              <Text style={style.buttonText}>Go to second</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      )}
      onDone={() => router.replace("/(tabs)/home")}
      onSkip={() => router.replace("/(tabs)/home")}
      dotClickEnabled={true}
      dotStyle={{ backgroundColor: "#000" }}
      activeDotStyle={{ backgroundColor: "#007B83" }}
      showSkipButton={true}
      showPrevButton={true}
      renderNextButton={() => (
        <Ionicons name="arrow-forward-circle" size={44} color="#007B83" />
      )}
      renderPrevButton={() => (
        <Ionicons name="arrow-back-circle" size={44} color="#007B83" />
      )}
      renderDoneButton={() => (
        <Ionicons name="checkmark-circle" size={44} color="#007B83" />
      )}
      renderSkipButton={() => (
        <Text
          style={{
            color: "#007B83",
            fontFamily: "Inter_400Regular",
            fontSize: 16,
            paddingTop: 10,
          }}
        >
          Skip
        </Text>
      )}
    />
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 2,
    fontFamily: "Inter_400Regular",
  },
  image: {
    width: "100%",
    height: 500,
    backgroundPosition: "center",
  },
  headingText: {
    fontSize: 30,
    fontFamily: "Inter_900Black",
    letterSpacing: -0.8,
    textAlign: "center",
    color: "#007B83",
  },
  paragraphText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007B83",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
