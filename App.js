import {Box, Text, NativeBaseProvider, StatusBar} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Components/Details/Details'
import List from './Components/List/List'
import {ProductProvider} from './Context/context'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ProductProvider>
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={List} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
    </ProductProvider>
  );
}

