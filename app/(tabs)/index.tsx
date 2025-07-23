import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Walk-in</Text>
        <Text style={styles.subtitle}>Your Fridge</Text>
      </View>
      <View style={styles.imageContainer}>
        {/* Add your image here */}
        <Image 
          source={{ uri: 'https://via.placeholder.com/300' }}
          style={styles.image}
        />
      </View>
      <Text style={styles.description}>
        Welcome to your recipe feed! Here you'll find all your favorite recipes and discover new ones.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16, // Added padding to container
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginHorizontal: -16, // Offset header padding with negative margins
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#666",
  },
  imageContainer: {
    flex: 1,
    margin: 16,
    backgroundColor: 'rgba(223, 220, 220, 0.9)',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#888",
    lineHeight: 24,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});
