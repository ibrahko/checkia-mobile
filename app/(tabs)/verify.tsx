import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';

type Tab = 'Texte' | 'URL' | 'Image';

export default function Verify() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('Texte');
  const [content, setContent] = useState('');

  const handleAnalyze = () => {
    if (!content.trim()) return;
    router.push('/loading');
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 22, paddingTop: 60 }}>
      <Text style={styles.title}>Nouvelle vérification</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {(['Texte', 'URL', 'Image'] as Tab[]).map((t) => (
          <TouchableOpacity key={t} style={[styles.tab, tab === t && styles.tabActive]} onPress={() => setTab(t)}>
            <Text style={[styles.tabText, tab === t && styles.tabTextActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Textarea */}
      <TextInput
        style={styles.textarea}
        placeholder={tab === 'Texte' ? 'Collez ou tapez le texte à vérifier…' : tab === 'URL' ? 'Collez le lien de l\'article…' : 'Appuyez pour choisir une image'}
        placeholderTextColor={Colors.gray}
        multiline={tab !== 'Image'}
        numberOfLines={8}
        value={content}
        onChangeText={setContent}
        textAlignVertical="top"
      />
      <Text style={styles.counter}>{content.length} / 1000</Text>

      {/* Langue */}
      <View style={styles.langRow}>
        <Text style={styles.langLabel}>🌍  Langue :</Text>
        <View style={styles.langPicker}><Text style={styles.langValue}>Français  ▼</Text></View>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={[styles.cta, !content.trim() && styles.ctaDisabled]}
        onPress={handleAnalyze}
        disabled={!content.trim()}
      >
        <Text style={styles.ctaText}>🔍  Analyser maintenant</Text>
      </TouchableOpacity>

      {/* Quick examples */}
      <Text style={styles.examplesTitle}>Exemples rapides :</Text>
      <View style={styles.examplesRow}>
        {['Coller un lien', 'Scanner image', 'Saisir texte'].map((ex) => (
          <TouchableOpacity key={ex} style={styles.exampleChip}>
            <Text style={styles.exampleText}>{ex}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:         { flex: 1, backgroundColor: Colors.bg },
  title:          { fontSize: 22, fontWeight: '800', color: Colors.white, marginBottom: 20 },
  tabs:           { flexDirection: 'row', gap: 10, marginBottom: 20 },
  tab:            { flex: 1, paddingVertical: 10, borderRadius: 8, backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border2, alignItems: 'center' },
  tabActive:      { backgroundColor: Colors.accent, borderColor: Colors.accent },
  tabText:        { color: Colors.gray, fontSize: 13, fontWeight: '600' },
  tabTextActive:  { color: Colors.bg, fontWeight: '800' },
  textarea:       { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border2, borderRadius: 12, padding: 16, color: Colors.white, fontSize: 14, minHeight: 160, marginBottom: 8 },
  counter:        { color: Colors.gray, fontSize: 12, textAlign: 'right', marginBottom: 20 },
  langRow:        { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 },
  langLabel:      { color: Colors.gray, fontSize: 13 },
  langPicker:     { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border2, borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16 },
  langValue:      { color: Colors.white, fontSize: 13 },
  cta:            { backgroundColor: Colors.accent, borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginBottom: 24 },
  ctaDisabled:    { opacity: 0.4 },
  ctaText:        { color: Colors.bg, fontSize: 15, fontWeight: '800' },
  examplesTitle:  { color: Colors.gray, fontSize: 12, marginBottom: 10 },
  examplesRow:    { flexDirection: 'row', gap: 8 },
  exampleChip:    { flex: 1, backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border2, borderRadius: 8, paddingVertical: 8, alignItems: 'center' },
  exampleText:    { color: Colors.gray, fontSize: 11 },
});
