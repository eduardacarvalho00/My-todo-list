/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable react/no-unstable-nested-components */
import {
  View, Text, FlatList, Image,
} from 'react-native';
import { CardTask } from '../CardTask';
import { InfoTaks } from '../InfoTask';
import { styles } from './styles';

interface ListTodoProps{
  data : any[] | null | undefined
  onRemove: (title: string) => void
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
}

export function ListTodo({ data, onRemove, setTasks }: ListTodoProps) {
  const numberTasks = () => {
    if (data && data?.length < 0) {
      return 0;
    }
    return data?.length;
  };
  
  return (
    <>
      <View style={styles.infoTasks}>
        <InfoTaks text="Criadas" number={numberTasks()} style={styles.textCriated} />
        <InfoTaks text="Concluídas" number={0} style={styles.textDone} />
      </View>

      <FlatList 
        style={styles.flatList}
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardTask key={item} title={item} onRemove={(title) => onRemove(title)} setTasks={setTasks} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.boxListEmpty}>
            <Image source={require('../../../assets/clipboard.png')} />
            <Text style={styles.textEmpty}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.textEmpty2}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
      />
    </>
  );
}
