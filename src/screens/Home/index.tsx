/* eslint-disable consistent-return */
/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert, Image, Text, TextInput, TouchableOpacity, View, 
} from 'react-native';
import { ListTodo } from '../../components/List';
import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksName, setTasksName] = useState('');

  function handleTaskAdd() {
    if (tasks.includes(tasksName)) {
      return Alert.alert('Tarefa ja adicionada', 'Não é possivel colocar duas tarefas iguais.');
    }
    setTasks((prevState) => [...prevState, tasksName]);
    setTasksName('');
  }

  function handleTaskRemove(title : string) {
    Alert.alert('Excluir', `Certeza que quer excluir a tarefa: ${title}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks((prevState) => prevState.filter((task) => task !== title)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
        <View style={styles.inputForm}>
          <TextInput 
            style={styles.inputCreateTask}
            placeholderTextColor="#808080"
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTasksName}
            value={tasksName}
          />
          <TouchableOpacity style={styles.button} onPress={() => handleTaskAdd()}>
            <Text style={styles.buttonText}>⊕</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.listTodo}>
        <ListTodo data={tasks} setTasks={setTasks} onRemove={(title) => handleTaskRemove(title)} />
      </View>
      
    </View>
  );
}
