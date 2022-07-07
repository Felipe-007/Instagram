import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  fotoPerfil: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  nomeUsuario: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  fotoPublicacao: {
    height: 400,
    alignItems: 'center'
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    height: 25,
    width: 25,
  },
  btnsend: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  descRodape: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15
  },
})