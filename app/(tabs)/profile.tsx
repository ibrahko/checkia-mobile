import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { Colors } from '../../constants/colors';

const MENU = [
  { icon: '🔔', label: 'Notifications' },
  { icon: '🌍', label: 'Langue : Français' },
  { icon: '🌙', label: 'Mode sombre' },
  { icon: '📤', label: "Partager l'app" },
  { icon: '🔒', label: 'Confidentialité' },
];

export default function Profile() {
  const router = useRouter();

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('token');
    router.replace('/(auth)/login');
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: 22, paddingTop: 60 }}>
      {/* Avatar */}
      <View style={styles.avatarSection}>
        <View style={styles.avatar}><Text style={styles.avatarText}>IK</Text></View>
        <Text style={styles.name}>Ibrahima Kone</Text>
        <Text style={styles.location}>Bamako, Mali 🇲🇱</Text>
        <View style={styles.verifiedBadge}><Text style={styles.verifiedText}>Membre vérifié ✓</Text></View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        {[['24', 'Vérifs', Colors.white], ['18', 'Vraies', Colors.accent], ['6', 'Fausses', Colors.false]].map(([val, lbl, clr]) => (
          <View key={lbl as string} style={styles.statCard}>
            <Text style={[styles.statVal, { color: clr as string }]}>{val}</Text>
            <Text style={styles.statLbl}>{lbl}</Text>
          </View>
        ))}
      </View>

      {/* Menu */}
      {MENU.map((item) => (
        <TouchableOpacity key={item.label} style={styles.menuItem}>
          <Text style={styles.menuText}>{item.icon}  {item.label}</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      ))}

      {/* Déconnexion */}
      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Text style={[styles.menuText, { color: Colors.false }]}>🚪  Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:        { flex: 1, backgroundColor: Colors.bg },
  avatarSection: { alignItems: 'center', marginBottom: 28 },
  avatar:        { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.accentDim, borderWidth: 2, borderColor: Colors.accent, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  avatarText:    { fontSize: 24, fontWeight: '800', color: Colors.accent },
  name:          { fontSize: 20, fontWeight: '800', color: Colors.white, marginBottom: 4 },
  location:      { fontSize: 13, color: Colors.gray, marginBottom: 10 },
  verifiedBadge: { backgroundColor: Colors.accentDim, borderWidth: 1, borderColor: Colors.accent, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 5 },
  verifiedText:  { color: Colors.accent, fontSize: 12, fontWeight: '700' },
  statsRow:      { flexDirection: 'row', gap: 12, marginBottom: 28 },
  statCard:      { flex: 1, backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, padding: 16, alignItems: 'center' },
  statVal:       { fontSize: 26, fontWeight: '800', marginBottom: 4 },
  statLbl:       { fontSize: 12, color: Colors.gray },
  menuItem:      { backgroundColor: Colors.card, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, padding: 16, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  menuText:      { fontSize: 14, color: Colors.white },
  menuArrow:     { fontSize: 18, color: Colors.gray },
});
