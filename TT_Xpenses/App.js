import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './src/Screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{
      header : () => null,
    }}>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;