import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✓ Check-IA fonctionne !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050D1A', alignItems: 'center', justifyContent: 'center' },
  text: { color: '#00D4AA', fontSize: 22, fontWeight: '800' },
});
