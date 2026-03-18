import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../../constants/colors';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
  fullWidth?: boolean;
};

export function Button({ label, onPress, variant = 'primary', loading, fullWidth }: Props) {
  const bg = variant === 'primary' ? Colors.accent
           : variant === 'danger'  ? Colors.false
           : Colors.card;
  const tc = variant === 'secondary' ? Colors.white : Colors.bg;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: bg, width: fullWidth ? '100%' : 'auto' }]}
      activeOpacity={0.8}
    >
      {loading
        ? <ActivityIndicator color={tc} />
        : <Text style={[styles.label, { color: tc }]}>{label}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { fontSize: 15, fontWeight: '700' },
});
