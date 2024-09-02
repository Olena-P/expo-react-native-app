import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from "@/constants/Colors";

type Props = {
  title: string;
  onPress: () => void;
};

const BigButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.primary,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default BigButton;
