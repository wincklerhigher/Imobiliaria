import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { obterTodosAnuncios, removerAnuncio } from '../Armazenamento/Async';
import ItemAnuncio from '../Componentes/ItemAnuncio';
import styles from '../Styles/TelaListagemStyles';

const TelaListagem = () => {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    const fetchAnuncios = async () => {
      const anunciosArmazenados = await obterTodosAnuncios();
      setAnuncios(anunciosArmazenados);
    };
    fetchAnuncios();
  }, []);

  const handleRemoverAnuncio = async (id) => {
    try {
      await removerAnuncio(id);
      const anunciosAtualizados = anuncios.filter((anuncio) => anuncio.id !== id);
      setAnuncios(anunciosAtualizados);
    } catch (error) {
      console.error('Erro ao remover o anúncio:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Anúncios</Text>
      <FlatList
        data={anuncios}
        keyExtractor={(item) => (item && item.id ? item.id.toString() : String(Math.random()))}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12 }}>
            <ItemAnuncio anuncio={item} />
            <TouchableOpacity onPress={() => handleRemoverAnuncio(item.id)}>
              <Text style={styles.deleteButton}>Excluir anúncio</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TelaListagem;