## 🔥Sobre o projeto

Trata-se de uma aplicação que simula uma urna eletrônica que foi requisitada na matéria de desenvolvimento Mobile no curso de Engenharia de Software. Foi desenvolvido utilizando Typescript(superset de JS) e o framework React Native.

---

## 🤓 Tecnologias utilizadas

* 🔤 Lang - [TypeScript](https://www.typescriptlang.org/)
* ⚛️ Framework - [React Native](https://reactnative.dev/)
* ✨ Estilização - [Styled Components](https://styled-components.com/)

---

## 🖼🖌Telas do projeto

* SplashScreen e Home

![homeScreen](https://user-images.githubusercontent.com/61207420/160254033-dd777ebf-9c80-439b-9b5b-c307d30d6504.gif)

* Realizando votação

![voting](https://user-images.githubusercontent.com/61207420/160217761-3fdfeac7-8a6d-4216-ac5d-c77f4425c74f.gif)

* Visualizando resultados

![results](https://user-images.githubusercontent.com/61207420/160217790-59d9f09f-f84a-4507-8586-84e3ad4e9c52.gif)

* Validações da Votação

![validations](https://user-images.githubusercontent.com/61207420/160217816-ae6e562a-2396-4294-a19b-fdd8e5937774.gif)

---

## 🧑‍💻 Como iniciar a aplicação

Para executar o projeto será necessário o emulador do Android Studio ou um dispositivo físico. Documentação sobre o assunto 👉 https://react-native.rocketseat.dev/

Primeiro vamos baixar todas as dependências do projeto:

```bash
npm install
# or
yarn install
```

Agora vamos executar o servidor de desenvolvimento:

```bash
npm start
# or
yarn start
```

Vamos inicializar o emulador:

```bash
npm android
# or
yarn android 
```
Realizar os seguintes comandos para mapear as portas do emulador as portas locais do nosso computador, para assim poder realizar as chamadas ao back-end.

```bash
adb -s emulator-5554 reverse tcp:8082 tcp:8082
adb -s emulator-5554 reverse tcp:9091 tcp:9091
```

O aplicativo abrirá automaticamente ao fim do comando yarn android.

---

## 📃 Licença

Este projeto está sobre a licença [Apache 2.0](LICENSE).