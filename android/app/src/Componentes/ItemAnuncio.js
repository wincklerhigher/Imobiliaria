import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Styles/ItemAnuncioStyles';

const ItemAnuncio = ({ anuncio }) => {
  return (
    <View style={styles.container}>
      {anuncio.foto && <Image source={{ uri: anuncio.foto }} style={styles.image} />}
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.text}>{anuncio.endereco}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Finalidade:</Text>
          <Text style={styles.text}>{anuncio.finalidade}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tipo:</Text>
          <Text style={styles.text}>{anuncio.tipo}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Valor:</Text>
          <Text style={styles.text}>{anuncio.valor}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemAnuncio;