import React from 'react';

import  { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


import Home from './pages/Home';
import Product from './pages/Product';


export default function Routes(){
    return(
      
          <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#7159c1'}, headerTintColor: '#fff'}}>
            <Stack.Screen name="Home" component={Home} options={{ title: 'JSHunt'}} />
            <Stack.Screen name="Product" component={Product} options={({ route }) => ({ title: route.params.product.title })}/>
            </Stack.Navigator>
   
            
        
        
    )
}