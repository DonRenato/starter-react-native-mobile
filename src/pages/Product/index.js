import React from 'react';
import { WebView } from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';

// import { Container } from './styles';

export default function Product({ navigation }){
  
 const route = useRoute();
 
 const url=  route.params.product.url;


  return(

    <WebView source={{uri: url}} />
    
  )


}



 
     
