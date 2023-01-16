import { View } from 'react-native';
import { InfoTaks } from '../InfoTask';
import { styles } from './styles';

export function ListTodo() {
  return (
    <>
      <View style={styles.infoTasks}>
        <InfoTaks text="Criadas" number={1} style={styles.textCriated} />
        <InfoTaks text="Concluídas" number={0} style={styles.textDone} />
      </View>

      <View>
      </View>
    </>
  );
}
