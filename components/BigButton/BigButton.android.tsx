import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const BigButton = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default BigButton;
