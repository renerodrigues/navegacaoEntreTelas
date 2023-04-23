import React from 'react';
import { StatusBar, SafeAreaView , Text} from 'react-native';
//import useProdutores from './src/hooks/useProdutores';
import AppRotas from './src/rotas/AppRotas';


//import Home from './src/telas/produtores';


export default function App() {
//  const produtores = useProdutores(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
       <AppRotas />  
    </SafeAreaView>
  )
}