
import { StyleSheet } from 'react-native';

export const st = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  btnGrande: {
    width: 130,
    height: 60,
    backgroundColor: 'hsl(39, 100%, 50%)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 4,
  },
  btnGrandeText:{
    color: 'yellow',
    fontSize: 15,
  },
  btnParamsContainer:{
    flexDirection: 'row',
    justifyContent:'center',
  },
  avatarContent: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width:100,
    height:100,
  },
  menuContainer: {
    // backgroundColor: 'orange',
    marginVertical: 30,
    marginHorizontal: 50,
  },
  btnMenu:{
    marginBottom:10,
  },
  optionsMenu: {
    // color: 'red',
    fontSize: 20,
  },
});
