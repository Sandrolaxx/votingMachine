## 😎 Sobre o projeto

Trata-se de uma aplicação que simula uma urna eletrônica, esta que foi requisitada na matéria de Desenvolvimento para Dispositivos Móveis no curso de Engenharia de Software do [Centro Universitário FAG](https://www.fag.edu.br/). Foi desenvolvido utilizando Typescript(superset de JS) e o framework React Native. Na solução é possível realizar a votação para os candidatos disponíveis, voto em branco, nulo e já tratando situações de segundo turno para presidente e governador, e empates para os demais cargos.

---

## 🤓 Tecnologias utilizadas

* 🔤 Lang - [TypeScript](https://www.typescriptlang.org/)
* ⚛️ Framework - [React Native](https://reactnative.dev/)
* ✨ Estilização - [Styled Components](https://styled-components.com/)
* 💾 Storage - [SQLite](https://www.npmjs.com/package/react-native-sqlite-storage)
* 🤯 Animações - [Lottie Files](https://lottiefiles.com/)
* 🔀 Navegação - [React Navigation](https://reactnavigation.org/)

---

## 🖼🖌Telas do projeto

###  *SplashScreen e Home*
![homeScreen](https://user-images.githubusercontent.com/61207420/160255028-6a580769-8670-4204-9f09-44e064f96918.gif)

###  *Realizando votação*
![voting](https://user-images.githubusercontent.com/61207420/160256060-4b1f44fa-1d64-480e-b9b7-022ecf594db1.gif)

###  *Visualizando resultados*
![results](https://user-images.githubusercontent.com/61207420/160256085-c3a05699-df19-4dbb-b1db-3131718270ab.gif)

###  *Validações da Votação*
![validations](https://user-images.githubusercontent.com/61207420/160256107-4e7ee33f-981c-49e4-ad15-8d7dae69a842.gif)

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

O aplicativo abrirá automaticamente ao fim do comando yarn android.

⚠️ **Importante**

Como o intuito do projeto era realizar o desenvolvimento mobile, não foi desenvolvido um back-end específico para esta aplicação, então foi consumido um mock de uma API utilizando o site 👉 https://mocki.io/ onde basta adicionar o json que deseja realizar o mock, um exemplo de json está disponível em src/services/dataset.json no diretório do projeto.

---

## 📃 Licença

Este projeto está sobre a licença [Apache 2.0](LICENSE).