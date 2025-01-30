import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  PanResponder
} from "react-native";


const { width: SCREEN_WIDTH } = Dimensions.get("window");

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Event cards data
  const eventCards = [
    {
      id: "1",
      image: require("../../assets/images/Eventcard1.jpg"),
      title: "Dubai Shopping Festival",
      date: "15 Jan - 15 Feb 2025",
    },
    {
      id: "2",
      image: require("../../assets/images/EventCard2.jpg"),
      title: "Dubai Food Festival",
      date: "20 Feb - 5 Mar 2025",
    },
    {
      id: "3",
      image: require("../../assets/images/EventCard3.jpg"),
      title: "Dubai Jazz Festival",
      date: "10 Mar - 20 Mar 2025",
    },
  ];

  // Service categories
  const services = [
    "Bills",
    "Mobile",
    "Driving",
    "Housing",
    "Residency",
    "Health",
  ];

  // PanResponder for swipe handling
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx > 50) {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (gestureState.dx < -50) {
        setActiveIndex((prev) => Math.min(prev + 1, eventCards.length - 1));
      }
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>
          Samadhan<Text style={styles.subtitle}>Setu</Text>
        </Text>
      </View>

      {/* Swipeable Event Cards */}
      <View style={styles.eventContainer} {...panResponder.panHandlers}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={eventCards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventCard}>
              <Image source={item.image} style={styles.cardImage} />
              {/* Text container inside but fixed positioned */}
              <View style={styles.eventTextContainer}>
                <Text style={styles.eventTitle}>
                  {eventCards[activeIndex]?.title}
                </Text>
                <Text style={styles.eventDate}>
                  {eventCards[activeIndex]?.date}
                </Text>
              </View>
            </View>
          )}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / SCREEN_WIDTH
            );
            setActiveIndex(index);
          }}
        />
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {eventCards.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? "#FF6B00" : "#D9D9D9",
              },
            ]}
          />
        ))}
      </View>

      {/* Service Categories - 3 Circles per Row */}
      <Text style={styles.sectionTitle}>Service Categories</Text>
      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <View key={index} style={styles.circleContainer}>
            <TouchableOpacity style={styles.circle}>
              {/* Add your icon component here */}
            </TouchableOpacity>
            <Text style={styles.serviceText}>{service}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1666a8",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "300",
    color: "#3a9874",
  },
  eventContainer: {
    height: 280, 
    marginTop: 12,
    position: 'relative',
  },
  eventCard: {
    width: SCREEN_WIDTH - 30,
    height: 260, // Keep this as is
    borderRadius: 16,
    overflow: "hidden",
    marginHorizontal: 15,
  },
  cardImage: {
    flex: 1,
    resizeMode: "cover",
  },
  eventTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,1)", // Adjust alpha (0.5 = 50% transparency)
    padding: 8, // Remove opacity here!
  },
  eventTitle: {
    color: "#3a9874",
    fontSize: 20,
    fontWeight: 700,
    opacity: 1,
  },
  eventDate: {
    color: "#1666a8",
    fontWeight: 600,
    fontSize: 16,
    marginTop: 0,
    opacity: 2,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 1,
    marginTop:0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5, // Only horizontal spacing between dots
    marginTop: 0, // Ensure no extra top margin
    marginBottom: 0, // Ensure no extra bottom margin
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333333",
    margin: 10,
    marginBottom: 16,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  circleContainer: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FF6B00",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceText: {
    color: "#333",
    fontSize: 14,
    textAlign: "center",
  },
});

export default HomeScreen;
