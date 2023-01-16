/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import {
  Image, Text, TextInput, TouchableOpacity, View, 
} from 'react-native';
import { ListTodo } from '../../components/List';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} />
        <View style={styles.inputForm}>
          <TextInput 
            style={styles.inputCreateTask}
            placeholderTextColor="#808080"
            placeholder="Adicione uma nova tarefa"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>⊕</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.listTodo}>
        <ListTodo />
      </View>
      
    </View>
  );
}
