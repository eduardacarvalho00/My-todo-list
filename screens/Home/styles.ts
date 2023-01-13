import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    position: 'absolute',
  },
  inputForm:{
    width: '100%',
    height: 54,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
    position: 'relative',
  },
  inputCreateTask: {
    width: 271,
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#262626',
    color: '#FFFFFF',
    fontSize: 19,
    marginRight: 4,
  },
  button: {
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  buttonText:{
    color: '#FFFFFF',
    fontSize: 23,
  },
});