import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F0F0F0',
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
  deleteButton: {
    backgroundColor: '#DC143C',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 6,    
    textAlign: 'center',
  },
});