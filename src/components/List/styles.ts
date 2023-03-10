import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  infoTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#808080',
    paddingBottom: 20,
  },
  textCriated: {
    color: '#4EA8DE',
    fontWeight: '700',
  },
  textDone: {
    color: '#8284FA',
    fontWeight: '700',
  },
  boxListEmpty: {
    marginTop: 48,
    alignItems: 'center',
  },
  textEmpty: {
    color: '#808080',
    fontWeight: 'bold',
    marginTop: 16,
  },
  textEmpty2: {
    color: '#808080',
  },
  flatList: {
    height: '70%',
  },
});
