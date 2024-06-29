import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'anuncios';

const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const salvarAnuncio = async (anuncio) => {
  try {
    let anuncios = await AsyncStorage.getItem(STORAGE_KEY);
    anuncios = anuncios ? JSON.parse(anuncios) : [];
        
    if (!anuncio.id) {
      anuncio.id = generateUniqueId();
    }

    anuncios.push(anuncio);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(anuncios));
  } catch (error) {
    console.error('Erro ao salvar anúncio:', error);
  }
};

export const obterTodosAnuncios = async () => {
  try {
    const anuncios = await AsyncStorage.getItem(STORAGE_KEY);
    return anuncios ? JSON.parse(anuncios) : [];
  } catch (error) {
    console.error('Erro ao obter anúncios:', error);
    return [];
  }
};

export const removerAnuncio = async (id) => {
  try {
    let anuncios = await AsyncStorage.getItem(STORAGE_KEY);
    anuncios = anuncios ? JSON.parse(anuncios) : [];
    const anunciosAtualizados = anuncios.filter((anuncio) => anuncio.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(anunciosAtualizados));
  } catch (error) {
    console.error('Erro ao remover anúncio:', error);
    throw error; 
  }
};