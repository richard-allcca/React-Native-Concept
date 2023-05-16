
import { StyleSheet } from 'react-native';

export const colors = {
  $primary: 'rgb(85, 113, 239)',
  $success: 'rgb(129, 236, 236)',
  $dark: 'rgb(116, 185, 255)',
  $secondary: 'rgb(162, 155, 254)',
  $primaryGreen: 'rgb(85, 239, 196)',
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  tealAlpha: 'hsla(162, 73%, 46%, .8)',
  cyan: '#0dcaf0',
  white: '#fff',
  gray: '#6c757d',
  grayDark: '#343a40',
  grayCustom: 'hsla(0, 0%, 84%, 1)',
  primary: '#0d6efd',
  secondary: '#6c757d',
  success: '#198754',
  info: '#0dcaf0',
  warning: '#ffc107',
  danger: '#dc3545',
  dangerAlpha: 'hsla(354, 70%, 54%, .8)',
  light: '#f8f9fa',
  dark: '#212529',
};

export const st = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  btnPagUno: {
    width: 130,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 4,
  },
  btnGrandeText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnParamsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarContent: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  menuContainer: {
    // backgroundColor: 'orange',
    marginVertical: 30,
    marginHorizontal: 50,
  },
  btnMenu: {
    marginBottom: 10,
  },
  optionsMenu: {
    // color: 'red',
    fontSize: 20,
  },
});
