import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, FlatList, View, Image } from 'react-native';
import Cesta from './componentes/Cesta';
import useTextos from '../../hooks/useTextos';
import Topo from '../../componentes/Topo';
import imagemTopo from '../../assets/produtores/topo.png'

export default function Produtor() {
    const route = useRoute()
    const { nome, imagem, cestas } = route.params
    const { tituloProdutor, tituloCestas } = useTextos()
    const TopoLista = () => {
        return <>
            <Topo titulo={tituloProdutor} imagem={imagemTopo} altura={150} />
            <View style={estilos.conteudo}>
                <View style={estilos.logo}>
                    <Image source={imagem} style={estilos.produtorImage} />
                    <Text style={estilos.produtor}>{nome}</Text>
                </View>
                <Text style={estilos.cestas}>{tituloCestas}</Text>
             
            </View>
        </>
    }
    return <FlatList
        data={cestas}
        renderItem={
            ({ item }) =>
                <Cesta {...item}
                    produtor={{ nome, imagem }}
                />
        }
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}
        style={estilos.lista} />

    // return <FlatList
    //     data={cestas}
    //     renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />}
    //     style={estilos.lista}
    //     keyExtractor={({ nome }) => nome}
    //     ListHeaderComponent={{ TopoLista }}
    // />
}

const estilos = StyleSheet.create({

    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
