import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function List(props) {  // ira acessar as propriedades da lista

	function carregaIcone(likeada) { // cria a função carregaIcone onde definirá o curtir ou nao curtir
		return likeada ? require('../img/likeada.png') :
		require('../img/like.png')
	}

  function mostraLikes(likers) {  //função que mostra a quantidade de likes
    if(likers === 0){
      return;
    }

    return(
      <Text style={styles.likes}>{likers}{likers > 1 ? 'curtidas' : 'curtida'}</Text>
    )
  }

	return (
		<View>

			<View style={styles.viewPerfil}>
				<Image
					source={{ uri: props.data.imgperfil }}
					style={styles.fotoPerfil}
				/>
				<Text style={styles.nomeUsuario}>{props.data.nome}</Text>
			</View>

			<Image
				resizeMode="cover"
				source={{ uri: props.data.imgPublicacao }}
				style={styles.fotoPublicacao}
			/>

			<View style={styles.areaBtn}>
				<TouchableOpacity>
					<Image
						source={carregaIcone(props.data.likeada)}  //pega a funcao carregaIcone
						style={styles.iconeLike}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.btnsend}>
					<Image
						source={require('../img/comment.png')}
						style={styles.iconeLike}
					/>
				</TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
					<Image
						source={require('../img/send.png')}
						style={styles.iconeLike}
					/>
				</TouchableOpacity>
			</View>

      {mostraLikes(props.data.likers)}

      <Text style={styles.nomeRodape}>
        {props.data.nome}
      </Text>

      <Text style={styles.descRodape}>
        {props.data.descricao}
      </Text>

		</View>
	);
}