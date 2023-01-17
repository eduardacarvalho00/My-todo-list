/* eslint-disable no-unused-vars */
import {
  View, Text, TouchableOpacity, 
} from 'react-native';
import { styles } from './styles';

interface CardTaskProps{
  title: string;
  onRemove: (title : string) => void;
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
}

export function CardTask({ title, onRemove }: CardTaskProps) {
  return (
    <View style={styles.cardTasks}>
    <TouchableOpacity>
      <View style={styles.selectTask} />
    </TouchableOpacity>

    <Text style={styles.textTask}>{title}</Text>

    <TouchableOpacity onPress={() => onRemove(title)}>
      <Text>❌</Text>
    </TouchableOpacity>
  </View>
  );
}
