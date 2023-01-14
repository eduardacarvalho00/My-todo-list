import { Text, View } from "react-native";
import { styles } from "./styles";

export function ListTodo(){
  return(
    <>
      <View>
        <Text style={styles.taskCompleted}>Criadas 0</Text>
        <Text>Concluídas 0</Text>
      </View>
    </>
  )
}