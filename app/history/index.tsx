import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';

const HISTORY = [
  { id: '1', title: 'Article Benbere · 2h',      verdict: 'VRAI',    score: 87 },
  { id: '2', title: 'Vidéo Facebook · Hier',      verdict: 'FAUX',    score: 92 },
  { id: '3', title: 'Image Twitter · 2j',         verdict: 'DOUTEUX', score: 51 },
  { id: '4', title: 'Post WhatsApp · 3j',         verdict: 'FAUX',    score: 88 },
  { id: '5', title: 'Article Malijet · 1sem',     verdict: 'VRAI',    score: 74 },
];

const vc = (v: string) => v === 'VRAI' ? Colors.true : v === 'FAUX' ? Colors.false : Colors.warning;
const ic = (v: string) => v === 'VRAI' ? '✔' : v === 'FAUX' ? '✘' : '⚠';

const FILTERS = ['Tout', 'Vrais', 'Faux', 'Douteux'];

export default function History() {
  const router = useRouter();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 22, paddingTop: 60 }}>
      <Text style={styles.title}>Historique</Text>
      <View style={styles.filters}>
        {FILTERS.map((f) => (
          <TouchableOpacity key={f} style={[styles.chip, f === 'Tout' && styles.chipActive]}>
            <Text style={[styles.chipText, f === 'Tout' && styles.chipTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {HISTORY.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card} onPress={() => router.push(`/result/${item.id}`)}>
          <View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={[styles.cardVerdict, { color: vc(item.verdict) }]}>
              {ic(item.verdict)}  {item.verdict}  ({item.score}%)
            </Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:          { flex: 1, backgroundColor: Colors.bg },
  title:           { fontSize: 26, fontWeight: '800', color: Colors.white, marginBottom: 20 },
  filters:         { flexDirection: 'row', gap: 8, marginBottom: 20 },
  chip:            { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border2 },
  chipActive:      { backgroundColor: Colors.accentDim, borderColor: Colors.accent },
  chipText:        { color: Colors.gray, fontSize: 13 },
  chipTextActive:  { color: Colors.accent, fontWeight: '700' },
  card:            { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, padding: 16, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle:       { fontSize: 13, color: Colors.white, marginBottom: 4 },
  cardVerdict:     { fontSize: 12, fontWeight: '700' },
  chevron:         { color: Colors.gray, fontSize: 20 },
});
