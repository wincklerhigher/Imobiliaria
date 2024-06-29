import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './android/app/src/Telas/TelaInicial';
import TelaCadastro from './android/app/src/Telas/TelaCadastro';
import TelaListagem from './android/app/src/Telas/TelaListagem';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Listagem" component={TelaListagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;