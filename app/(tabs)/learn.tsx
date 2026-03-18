import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';

const ARTICLES = [
  { slug: 'deepfake',  title: 'Reconnaître un deepfake',       duration: '8 min',  icon: '🤖' },
  { slug: 'source',    title: 'Vérifier une source',           duration: '5 min',  icon: '🔍' },
  { slug: 'biais',     title: 'Les biais cognitifs',           duration: '6 min',  icon: '🧠' },
  { slug: 'ia-gen',    title: "Comprendre l'IA générative",    duration: '10 min', icon: '⚡' },
];

const CATS = [
    { ic: '📰', lb: 'Médias' },
    { ic: '🖼️', lb: 'Images' },
    { ic: '🤖', lb: 'IA' },
    { ic: '📊', lb: 'Data' },
  ];
  

export default function Learn() {
  const router = useRouter();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 22, paddingTop: 60 }}>
      <Text style={styles.title}>Apprendre</Text>
      <Text style={styles.sub}>Fiches anti-désinformation</Text>
      <TouchableOpacity style={styles.featured} onPress={() => router.push('/learn/deepfake')}>
        <Text style={styles.featTag}>🌍  À la une</Text>
        <Text style={styles.featTitle}>Désinformation au Sahel</Text>
        <Text style={styles.featSub}>Repérer les fausses infos · 5 min</Text>
        <Text style={styles.featArrow}>→</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Catégories</Text>
      <View style={styles.catsRow}>
        {[{ic:'📰',lb:'Médias'},{ic:'🖼️',lb:'Images'},{ic:'🤖',lb:'IA'},{ic:'📊',lb:'Data'}].map((c) => (
          <View key={c.lb} style={styles.catCard}>
            <Text style={styles.catIcon}>{c.ic}</Text>
            <Text style={styles.catLabel}>{c.lb}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Toutes les fiches</Text>
      {ARTICLES.map((a) => (
        <TouchableOpacity key={a.slug} style={styles.articleCard} onPress={() => router.push(`/learn/${a.slug}`)}>
          <Text style={styles.articleIcon}>{a.icon}</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.articleTitle}>{a.title}</Text>
            <Text style={styles.articleDur}>{a.duration} de lecture</Text>
          </View>
          <Text style={styles.chevron}>→</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:       { flex: 1, backgroundColor: Colors.bg },
  title:        { fontSize: 26, fontWeight: '800', color: Colors.white, marginBottom: 4 },
  sub:          { fontSize: 13, color: Colors.gray, marginBottom: 20 },
  featured:     { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.accent2, borderRadius: 14, padding: 20, marginBottom: 24 },
  featTag:      { fontSize: 11, color: Colors.accent2, marginBottom: 6 },
  featTitle:    { fontSize: 16, fontWeight: '800', color: Colors.white, marginBottom: 4 },
  featSub:      { fontSize: 12, color: Colors.gray },
  featArrow:    { position: 'absolute', right: 20, top: 20, fontSize: 18, color: Colors.accent2 },
  sectionTitle: { fontSize: 13, color: Colors.gray, fontWeight: '700', marginBottom: 12 },
  catsRow:      { flexDirection: 'row', gap: 10, marginBottom: 24 },
  catCard:      { flex: 1, backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, padding: 12, alignItems: 'center' },
  catIcon:      { fontSize: 24, marginBottom: 6 },
  catLabel:     { fontSize: 11, color: Colors.gray },
  articleCard:  { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, padding: 16, marginBottom: 10, flexDirection: 'row', alignItems: 'center', gap: 12 },
  articleIcon:  { fontSize: 22 },
  articleTitle: { fontSize: 13, color: Colors.white, fontWeight: '600', marginBottom: 4 },
  articleDur:   { fontSize: 11, color: Colors.gray },
  chevron:      { color: Colors.accent, fontSize: 16 },
});
