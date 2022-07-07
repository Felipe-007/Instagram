import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./src/global/styles";
import Header from "./src/Header";
import List from "./src/List";

export default function App() {

  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Felipe Lopes', 
      descricao: 'React Native CLI', 
      imgperfil: 'https://scontent.fbsb12-2.fna.fbcdn.net/v/t31.18172-8/13346234_875455062560019_2365062070721576861_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2gDlFp9DMnwAX-tMUgf&_nc_ht=scontent.fbsb12-2.fna&oh=00_AT8TYvPsMxLehVOL5IyUux1351Q_UsYlV9VhMU0B1Lo0yQ&oe=62ED2F0E',
      imgPublicacao: 'https://scontent.fbsb12-2.fna.fbcdn.net/v/t31.18172-8/13346234_875455062560019_2365062070721576861_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2gDlFp9DMnwAX-tMUgf&_nc_ht=scontent.fbsb12-2.fna&oh=00_AT8TYvPsMxLehVOL5IyUux1351Q_UsYlV9VhMU0B1Lo0yQ&oe=62ED2F0E',  
      likeada: true, 
      likers: 1
     },
    {
      id: '2', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false, 
      likers: 32
    }
  ])

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.id }  //  garante que seja encontrado o ID de cada post
        data={feed}
        renderItem={ ({ item }) => <List data={item} /> }  //  recebe a lista do import List from "./src/List";
      />
    </View>
  );
}