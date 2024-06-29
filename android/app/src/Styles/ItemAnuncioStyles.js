import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {    
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 5,
    borderRadius: 8,
  },
  textContainer: {
    fontSize: 18,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  text: {
    fontSize: 18,
  }
});
