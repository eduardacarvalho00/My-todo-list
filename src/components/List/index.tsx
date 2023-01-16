import { Text, View } from 'react-native';
import { styles } from './styles';

export function ListTodo() {
  return (
    <>
      <View style={styles.infoTasks}>

        <View style={styles.taskCriated}>
          <Text style={styles.textCriated}>Criadas</Text>
          
          <View style={styles.numberTask}>
            <Text style={styles.number}>1</Text>
          </View>
        </View>
        
        <View style={styles.taskCriated}>
          <Text style={styles.textDone}>Concluídas</Text>
          
          <View style={styles.numberTask}>
            <Text style={styles.number}>3</Text>
          </View>
        </View>
        
      </View>

      <View>
      </View>
    </>
  );
}
