import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Colors } from '../../constants/colors';

export default function Register() {
  const router = useRouter();
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pays, setPays] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>
      <Text style={styles.sub}>Rejoignez Check-IA</Text>
      <Input placeholder="👤  Prénom & Nom" value={nom} onChangeText={setNom} />
      <Input placeholder="📧  Email" value={email} onChangeText={setEmail} />
      <Input placeholder="🔒  Mot de passe" value={password} onChangeText={setPassword} secureTextEntry />
      <Input placeholder="🌍  Pays / Région" value={pays} onChangeText={setPays} />
      <Button label="Créer mon compte" onPress={() => router.replace('/(tabs)')} fullWidth />
      <Text style={styles.link} onPress={() => router.push('/(auth)/login')}>
        Déjà un compte ?  <Text style={{ color: Colors.accent }}>Se connecter</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: Colors.bg, padding: 28, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: Colors.white, textAlign: 'center', marginBottom: 8 },
  sub: { fontSize: 14, color: Colors.gray, textAlign: 'center', marginBottom: 32 },
  link: { color: Colors.gray, fontSize: 14, textAlign: 'center', marginTop: 24 },
});
