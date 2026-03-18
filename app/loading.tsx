import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/colors';

const STEPS = [
  'Extraction du contenu',
  'Recherche base Sahel',
  'Analyse IA NLP',
  'Génération rapport',
];

export default function Loading() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => {
        if (s >= STEPS.length - 1) {
          clearInterval(interval);
          setTimeout(() => router.replace('/result/1'), 600);
          return s;
        }
        return s + 1;
      });
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        <Text style={styles.icon}>⚙</Text>
      </View>
      <Text style={styles.title}>Analyse en cours…</Text>
      {STEPS.map((s, i) => (
        <Text key={i} style={[styles.step, { color: i < step ? Colors.accent : i === step ? Colors.white : Colors.gray }]}>
          {i < step ? '✓  ' : i === step ? '⋯  ' : '○  '}{s}
        </Text>
      ))}
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { width: `${(step / STEPS.length) * 100}%` as any }]} />
      </View>
      <Text style={styles.pct}>{Math.round((step / STEPS.length) * 100)}% — analyse en cours</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, alignItems: 'center', justifyContent: 'center', padding: 28 },
  ring: { width: 140, height: 140, borderRadius: 70, borderWidth: 2, borderColor: Colors.accent, backgroundColor: Colors.accentDim, alignItems: 'center', justifyContent: 'center', marginBottom: 32 },
  icon: { fontSize: 40, color: Colors.accent },
  title: { fontSize: 22, fontWeight: '800', color: Colors.white, marginBottom: 24 },
  step: { fontSize: 14, marginBottom: 10, alignSelf: 'flex-start' },
  barTrack: { width: '100%', height: 8, backgroundColor: Colors.border, borderRadius: 4, marginTop: 24 },
  barFill: { height: 8, backgroundColor: Colors.accent, borderRadius: 4 },
  pct: { color: Colors.gray, fontSize: 12, marginTop: 10 },
});
