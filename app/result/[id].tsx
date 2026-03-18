import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Badge } from '../../components/ui/Badge';
import { Colors } from '../../constants/colors';

// Données mock — à remplacer par un fetch API
const RESULT = {
  verdict: 'VRAI' as const,
  score: 87,
  explanation: 'Cette information est confirmée par 3 sources de fact-checking du Sahel. Publiée le 12 mars 2026.',
  sources: [
    { name: 'benbere.com', date: '12 mars 2026', url: 'https://benbere.com' },
    { name: 'voixdemopti.com', date: '10 mars 2026', url: 'https://voixdemopti.com' },
  ],
};

export default function Result() {
  const router = useRouter();
  const verdictBg = RESULT.verdict === 'VRAI' ? Colors.trueDim : RESULT.verdict === 'FAUX' ? Colors.falseDim : 'rgba(245,158,11,0.1)';
  const verdictBorder = RESULT.verdict === 'VRAI' ? Colors.true : RESULT.verdict === 'FAUX' ? Colors.false : Colors.warning;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 22, paddingTop: 60, paddingBottom: 40 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>←  Résultat</Text>
      </TouchableOpacity>

      {/* Verdict hero */}
      <View style={[styles.verdictCard, { backgroundColor: verdictBg, borderColor: verdictBorder }]}>
        <Badge verdict={RESULT.verdict} />
        <Text style={styles.scoreLabel}>Confiance : {RESULT.score}%</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${RESULT.score}%` as any, backgroundColor: verdictBorder }]} />
        </View>
      </View>

      {/* Explication */}
      <Text style={styles.sectionTitle}>Explication IA</Text>
      <View style={styles.card}><Text style={styles.explanation}>{RESULT.explanation}</Text></View>

      {/* Sources */}
      <Text style={styles.sectionTitle}>Sources</Text>
      {RESULT.sources.map((src) => (
        <TouchableOpacity key={src.name} style={styles.sourceCard}>
          <View>
            <Text style={styles.sourceLink}>🔗  {src.name}</Text>
            <Text style={styles.sourceDate}>{src.date}</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      ))}

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnSecondary}><Text style={styles.btnSecondaryText}>📤 Partager</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnPrimary}><Text style={styles.btnPrimaryText}>💾 Sauvegarder</Text></TouchableOpacity>
      </View>

      {/* Disclaimer */}
      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>⚠️  Résultat généré par IA — non définitif</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:           { flex: 1, backgroundColor: Colors.bg },
  back:             { color: Colors.white, fontSize: 15, fontWeight: '700', marginBottom: 20 },
  verdictCard:      { borderWidth: 1, borderRadius: 14, padding: 20, alignItems: 'center', marginBottom: 24, gap: 12 },
  scoreLabel:       { color: Colors.white, fontSize: 13 },
  progressTrack:    { width: '100%', height: 6, backgroundColor: Colors.border, borderRadius: 3 },
  progressFill:     { height: 6, borderRadius: 3 },
  sectionTitle:     { fontSize: 13, color: Colors.gray, fontWeight: '700', marginBottom: 10 },
  card:             { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, padding: 16, marginBottom: 20 },
  explanation:      { color: Colors.gray, fontSize: 13, lineHeight: 20 },
  sourceCard:       { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, padding: 16, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sourceLink:       { color: Colors.accent, fontSize: 13, fontWeight: '600', marginBottom: 4 },
  sourceDate:       { color: Colors.gray, fontSize: 11 },
  chevron:          { color: Colors.gray, fontSize: 18 },
  actions:          { flexDirection: 'row', gap: 12, marginTop: 24, marginBottom: 16 },
  btnSecondary:     { flex: 1, backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border2, borderRadius: 10, paddingVertical: 14, alignItems: 'center' },
  btnSecondaryText: { color: Colors.white, fontSize: 13, fontWeight: '700' },
  btnPrimary:       { flex: 1, backgroundColor: Colors.accent2, borderRadius: 10, paddingVertical: 14, alignItems: 'center' },
  btnPrimaryText:   { color: Colors.white, fontSize: 13, fontWeight: '700' },
  disclaimer:       { backgroundColor: 'rgba(245,158,11,0.10)', borderWidth: 1, borderColor: Colors.warning, borderRadius: 8, padding: 12 },
  disclaimerText:   { color: Colors.warning, fontSize: 12, textAlign: 'center' },
});
