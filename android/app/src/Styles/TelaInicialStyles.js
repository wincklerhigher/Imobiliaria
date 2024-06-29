import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    textShadowColor: '#483D8B',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
    elevation: 5,
    marginBottom: 200,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 360,
  },
  buttonSpacer: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00CED1',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 22,
    elevation: 5,
  },
  button2: {
    backgroundColor: '#40E0D0',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 22,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});