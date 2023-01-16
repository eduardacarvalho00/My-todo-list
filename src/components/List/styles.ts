import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  infoTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskCriated: {
    flexDirection: 'row',
  },
  textCriated: {
    color: '#4EA8DE',
    fontWeight: '700',
  },
  textDone: {
    color: '#8284FA',
    fontWeight: '700',
  },
  numberTask: {
    backgroundColor: '#333333',
    borderRadius: 10,
    width: 25,
    height: 18,
    alignItems: 'center',
    marginLeft: 8,
  },
  number: {
    padding: 1,
    fontSize: 12,
    color: '#FFFFFF',
  },
});
