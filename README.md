# Inicio

Crear un proyecto

    npx react-native init MyApp --template react-native-template-typescript --npm

Correr en local segun tu SO

    npm run start

Corre en local andriod
    npx react-native run-android

Corre en local ios
    npx react-native run-ios

## Comceptos tocados en esta sección

Hola Mundo en React Native

Cambios en el State

Contador

Re-utilización de componentes

Pantallas

Componentes personalizados

Stylesheet

Envío de argumentos a componentes

Tipando props

Componentes como:

    - View

    - Text

    - TouchableOpacity

    - TouchableNativeFeedback

    - TouchableWithoutFeedback

Section 7 - tipos de navegación class/102

- Stack  Navigation
  - similar a una baraja de cartas
  - navigation.pop - popToTop - goBack
- Drawer Navigation
- BottonTab Navigation
- MaterialTop Navigation

## Enlaces

[Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)

## Dependencias

    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context

Además agregar en MainActivity.java:

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
    }

También instalar las siguientes:

    npm install @react-navigation/stack
    npm install react-native-gesture-handler

Además importar arriba de todo en App:

    import 'react-native-gesture-handler';

e instalar este último módulo:

    npm install @react-native-masked-view/masked-view
