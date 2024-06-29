import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#A9A9A9',    
  },
  title: {
    fontSize: 24,
    marginTop: 20, 
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    textShadowColor: '#483D8B',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15, 
    width: '100%',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});