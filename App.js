import { StyleSheet } from 'react-native';
import Home from './components/home';
import TodoDetails from './components/todoDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Todo from './components/todo';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';





export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
         <NavigationContainer style={styles.container}>{
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TodoDetails" component={TodoDetails} />
        <Stack.Screen name="Todo" component={Todo} />
      </Stack.Navigator>
        }</NavigationContainer> 
     </Provider>
  );
}

const styles = StyleSheet.create({
});


