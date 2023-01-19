import {
  View, Text, StyleProp, TextStyle, 
} from 'react-native';
import { styles } from './styles';

interface InfoTasks{
  text: string;
  number: number | undefined
  style : StyleProp<TextStyle>
}

export function InfoTaks({ text, number, style }: InfoTasks) {
  return (
    <View style={styles.taskCriated}>
      <Text style={style}>{text}</Text>
      
      <View style={styles.numberTask}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
}
