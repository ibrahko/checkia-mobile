import { TextInput, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (v: string) => void;
  secureTextEntry?: boolean;
  label?: string;
};

export function Input({ placeholder, value, onChangeText, secureTextEntry, label }: Props) {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={secureTextEntry ? 'default' : 'email-address'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  label: { color: Colors.gray, fontSize: 12, marginBottom: 6 },
  input: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border2,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: Colors.white,
    fontSize: 14,
  },
});
