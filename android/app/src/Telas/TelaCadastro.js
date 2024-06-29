import React, { useState, useCallback } from 'react';
import DocumentPicker from 'react-native-document-picker'; 
import { View, Text, TextInput, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { salvarAnuncio } from '../Armazenamento/Async';
import styles from '../Styles/TelaCadastroStyles';
import CustomButton from '../Componentes/CustomButton';

const TelaCadastro = ({ navigation }) => {
  const [endereco, setEndereco] = useState('');
  const [finalidade, setFinalidade] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [foto, setFoto] = useState(null);

  const handleTirarFoto = useCallback(() => {
    launchCamera({ mediaType: 'photo', quality: 0.7 }, response => {
      if (!response.didCancel && !response.error) {
        setFoto(response.assets[0].uri);
      }
    });
  }, []);

  const handleEscolherFoto = useCallback(() => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
      if (!response.didCancel && !response.error) {
        setFoto(response.assets[0].uri);
      }
    });
  }, []);

  const handleBuscarImagens = useCallback(async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setFoto(res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled document picker');
      } else {
        console.log(err);
      }
    }
  }, []);

  const handleSalvarAnuncio = useCallback(async () => {
    const novoAnuncio = { endereco, finalidade, tipo, valor, foto };
    await salvarAnuncio(novoAnuncio);
    navigation.goBack();
  }, [endereco, finalidade, tipo, valor, foto, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Anúncio</Text>
      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        style={styles.input}
      />
      <TextInput
        placeholder="Finalidade (aluguel ou venda)"
        value={finalidade}
        onChangeText={setFinalidade}
        style={styles.input}
      />
      <TextInput
        placeholder="Tipo (casa, apartamento ou comércio)"
        value={tipo}
        onChangeText={setTipo}
        style={styles.input}
      />
      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        style={styles.input}
      />
      {foto && <Image source={{ uri: foto }} style={styles.image} />}
      <CustomButton title="Tirar Foto" onPress={handleTirarFoto} />
      <CustomButton title="Escolher Foto" onPress={handleEscolherFoto} />
      <CustomButton title="Buscar Imagens" onPress={handleBuscarImagens} />
      <CustomButton title="Salvar Anúncio" onPress={handleSalvarAnuncio} />
    </View>
  );
};

export default TelaCadastro;