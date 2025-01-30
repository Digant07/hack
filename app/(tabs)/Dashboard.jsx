import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

// Sample data for the videos (You can replace this with real video data)
const videoData = [
  {
    id: '1',
    title: 'Understanding Firebase Authentication',
    thumbnail: 'https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/0.jpg', // Replace with the actual YouTube video thumbnail URL
    videoUrl: 'https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID',
  },
  {
    id: '2',
    title: 'React Native Tutorial for Beginners',
    thumbnail: 'https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/0.jpg', // Replace with the actual YouTube video thumbnail URL
    videoUrl: 'https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID',
  },
  {
    id: '3',
    title: 'How to Build a Chat App in React Native',
    thumbnail: 'https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/0.jpg', // Replace with the actual YouTube video thumbnail URL
    videoUrl: 'https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID',
  },
  // Add more videos here
];

const ResourcesTab = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        // Open the video link in the default browser
        Linking.openURL(item.videoUrl);
      }}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  flatListContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    width: 180,
    height: 250,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // for Android shadow
  },
  thumbnail: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  cardTitle: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ResourcesTab;
