import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardTasks: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333333',
    backgroundColor: '#262626',
    padding: 20,
  },
  selectTask: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: '#4EA8DE',
  },
  textTask: {
    fontSize: 15,
    marginLeft: 8,
    color: '#F2F2F2',
    flex: 1,
  },
});
