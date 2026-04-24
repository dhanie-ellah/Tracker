import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  Dimensions,
  View,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState, useEffect } from "react";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: "1",
      title: "Smart Daily Planner",
      text: "Design your focus. Achieve your goals with intentional clarity.",
      image: require("../assets/images/onboardingOne.png"),
    },
    {
      id: "2",
      title: "Easily Structure your day.",
      text: "Group tasks by Work, Health or Projects to keep your mind clear and your flow uninterrupted.",
      image: require("../assets/images/onboardingTwo.png"),
    },
    {
      id: "3",
      title: "Visualize your progress.",
      text: "Track your achievements and stay motivated on your journey to success.",
      image: require("../assets/images/onboardingThree.png"),
    },
  ];

  // Track current slide
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index?? 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  // Skip button - go to app
  const handleSkip = () => {
    router.replace("/(tabs)/home");
  };

  // Next button - go to next slide or finish
  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      handleSkip(); // Last slide = same as skip
    }
  };

  // Auto scroll every 3s - stop when user touches
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex === slides.length - 1? 0 : currentIndex + 1;
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }: any) => (
    <View style={style.slide}>
      <Image
        source={item.image}
        style={style.image}
        resizeMode="contain"
      />
      <View style={style.textWrapper}>
        <Text style={style.headingText}>{item.title}</Text>
        <Text style={style.paragraphText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={style.container}>
      {/* Skip button top right */}
      <Pressable style={style.skipBtn} onPress={handleSkip}>
        <Text style={style.skipText}>Skip</Text>
      </Pressable>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onScrollBeginDrag={() => {}} // Add logic here if you want to pause auto-scroll
      />

      {/* Pagination dots */}
      <View style={style.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              style.dot,
              currentIndex === index && style.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Next / Get Started button */}
      <Pressable style={style.button} onPress={handleNext}>
        <Text style={style.buttonText}>
          {currentIndex === slides.length - 1? "Get Started" : "Next"}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7fafa",
  },
  slide: {
    width,
    height: height * 0.75, // Leave space for button + dots
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  textWrapper: {
    marginTop: 20,
  },
  headingText: {
    fontSize: 35,
    fontFamily: "Inter_700Bold",
    letterSpacing: -2.0,
    textAlign: "center",
    color: "#007B83",
  },
  paragraphText: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    marginTop: 8,
    color: "#444",
  },
  skipBtn: {
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#007B83",
    fontFamily: "Inter_400Regular",
  },
  pagination: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#CBD5E0",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#007B83",
    width: 20,
  },
  button: {
    backgroundColor: "#007B83",
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});