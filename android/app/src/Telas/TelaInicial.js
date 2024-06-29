import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/TelaInicialStyles';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>Cadastrar Anúncio</Text>
        </TouchableOpacity>
        <View style={styles.buttonSpacer} />
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Listagem')}>
          <Text style={styles.buttonText}>Ver Anúncios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaInicial;