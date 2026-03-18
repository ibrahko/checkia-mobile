import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: Colors.card, borderTopColor: Colors.border, height: 60 },
      tabBarActiveTintColor: Colors.accent,
      tabBarInactiveTintColor: Colors.gray,
      tabBarLabelStyle: { fontSize: 11, marginBottom: 6 },
    }}>
      <Tabs.Screen name="index"   options={{ title: 'Accueil',  tabBarIcon: ({ color }) => <Ionicons name="home" size={22} color={color} /> }} />
      <Tabs.Screen name="verify"  options={{ title: 'Vérif',    tabBarIcon: ({ color }) => <Ionicons name="search" size={22} color={color} /> }} />
      <Tabs.Screen name="learn"   options={{ title: 'Apprendre',tabBarIcon: ({ color }) => <Ionicons name="book" size={22} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil',   tabBarIcon: ({ color }) => <Ionicons name="person" size={22} color={color} /> }} />
    </Tabs>
  );
}
