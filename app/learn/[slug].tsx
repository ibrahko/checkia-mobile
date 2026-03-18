import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';

export default function Article() {
  const router = useRouter();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 22, paddingTop: 60, paddingBottom: 40 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>←  Apprendre</Text>
      </TouchableOpacity>
      <View style={styles.hero}>
        <Text style={styles.heroIcon}>🤖</Text>
        <Text style={styles.heroTitle}>Reconnaître un deepfake</Text>
        <Text style={styles.heroMeta}>8 min  ·  Débutant</Text>
        <View style={styles.barTrack}><View style={[styles.barFill, { width: '33%' }]} /></View>
        <Text style={styles.section}>Section 1 / 3</Text>
      </View>
      <Text style={styles.h2}>Qu'est-ce qu'un deepfake ?</Text>
      <Text style={styles.body}>
        Un deepfake est une vidéo, image ou audio générée par intelligence artificielle pour faire dire à une personne des choses qu'elle n'a jamais dites ou faites.
      </Text>
      <Text style={styles.h2}>Comment détecter ?</Text>
      {['Vérifier les bords du visage', 'Recherche image inversée', 'Consulter Benbere ou Snopes', 'Analyser la cohérence lumineuse'].map((tip) => (
        <View key={tip} style={styles.tipRow}>
          <View style={styles.tipBar} />
          <Text style={styles.tipText}>{tip}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Section suivante →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:    { flex: 1, backgroundColor: Colors.bg },
  back:      { color: Colors.accent2, fontSize: 14, fontWeight: '700', marginBottom: 20 },
  hero:      { backgroundColor: Colors.accent2 + '20', borderWidth: 1, borderColor: Colors.accent2, borderRadius: 14, padding: 20, alignItems: 'center', marginBottom: 24 },
  heroIcon:  { fontSize: 36, marginBottom: 10 },
  heroTitle: { fontSize: 18, fontWeight: '800', color: Colors.white, textAlign: 'center', marginBottom: 6 },
  heroMeta:  { fontSize: 12, color: Colors.gray, marginBottom: 12 },
  barTrack:  { width: '100%', height: 4, backgroundColor: Colors.border, borderRadius: 2, marginBottom: 6 },
  barFill:   { height: 4, backgroundColor: Colors.accent2, borderRadius: 2 },
  section:   { fontSize: 11, color: Colors.gray },
  h2:        { fontSize: 16, fontWeight: '800', color: Colors.white, marginBottom: 10, marginTop: 20 },
  body:      { fontSize: 14, color: Colors.gray, lineHeight: 22, marginBottom: 10 },
  tipRow:    { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  tipBar:    { width: 4, height: 20, backgroundColor: Colors.accent, borderRadius: 2 },
  tipText:   { fontSize: 14, color: Colors.white },
  btn:       { backgroundColor: Colors.accent2, borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 32 },
  btnText:   { color: Colors.white, fontSize: 15, fontWeight: '800' },
});
