import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Linking, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Educational video content about public grievances and citizen rights
const videoData = [
  {
    id: '1',
    title: 'How to File an Effective Complaint',
    description: 'Learn the step-by-step process of filing a strong complaint',
    thumbnail: 'https://img.youtube.com/vi/XqZsoesa55w/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=XqZsoesa55w',
    category: 'Tutorial'
  },
  {
    id: '2',
    title: 'Understanding Your Consumer Rights',
    description: 'Know your rights as a consumer and how to protect them',
    thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    category: 'Education'
  },
  {
    id: '3',
    title: 'Public Services: Your Rights & Responsibilities',
    description: 'Essential guide to public services and citizen rights',
    thumbnail: 'https://img.youtube.com/vi/M7FIvfx5J10/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=M7FIvfx5J10',
    category: 'Education'
  },
  {
    id: '4',
    title: 'Cybercrime Safety Tips',
    description: 'Protect yourself from online fraud and cybercrime',
    thumbnail: 'https://img.youtube.com/vi/kgCNGvL0g1g/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=kgCNGvL0g1g',
    category: 'Safety'
  },
  {
    id: '5',
    title: 'Government Schemes & Benefits',
    description: 'Overview of important government schemes and benefits',
    thumbnail: 'https://img.youtube.com/vi/UNZxqZ7vZ5U/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=UNZxqZ7vZ5U',
    category: 'Government'
  }
];

const ResourcesScreen = () => {
  const renderVideoCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => Linking.openURL(item.videoUrl)}
    >
      <Image 
        source={{ uri: item.thumbnail }} 
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle} numberOfLines={1}>AMC Resources</Text>
        <Text style={styles.headerSubtitle}>Learn about your rights and how to file complaints effectively</Text>
      </View>

      <FlatList
        data={videoData}
        renderItem={renderVideoCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1666a8',
    marginBottom: 4,
    textAlign: 'left',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'left',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  thumbnail: {
    width: '100%',
    height: 180,
    backgroundColor: '#F0F0F0',
  },
  cardContent: {
    padding: 16,
  },
  categoryBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  categoryText: {
    color: '#1666a8',
    fontSize: 12,
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});

export default ResourcesScreen;
