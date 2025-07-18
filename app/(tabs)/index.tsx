import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Plate</Text>
      <Text style={styles.subtitle}>Recipe Feed</Text>
      <Text style={styles.description}>
        Welcome to your recipe feed! Here you'll find all your favorite recipes and discover new ones.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    color: "#666",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#888",
    lineHeight: 24,
  },
});
