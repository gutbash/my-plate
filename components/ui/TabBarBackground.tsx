import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

import { Colors } from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';

export function useBottomTabOverflow() {
  return { bottom: 0 };
}

export default function TabBarBackground() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <BlurView
        intensity={95}
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: Colors[colorScheme ?? 'light'].background },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
