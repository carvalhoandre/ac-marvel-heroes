# AC Marvel Heroes

Este projeto é uma aplicação web que consome a API da Marvel para exibir personagens, quadrinhos e outros dados relevantes sobre o universo Marvel. Ele utiliza tecnologias modernas como React, Vite e Zustand para gerenciamento de estado e performance.

## Tecnologias utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e otimizada para desenvolvimento de front-end.
- **Zustand**: Biblioteca para gerenciamento de estado leve e escalável.
- **Styled-components**: Para estilização dinâmica dos componentes React.

## Demonstração
[![Netlify Status](https://api.netlify.com/api/v1/badges/81adf5ff-79a7-4646-ae66-8da459152bd9/deploy-status)](https://app.netlify.com/sites/ac-marvel-heroes/deploys)

Você pode acessar o site de demonstração do projeto clicando no link abaixo:
[Site de Demonstração]([https://github.com/carvalhoandre/marvel_heroes](https://ac-marvel-heroes.netlify.app/))

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
```bash
git clone https://github.com/carvalhoandre/marvel_heroes.git
```
   
2. Clone o repositório:  
```bash
cd marvel_heroes
```

4. Instale as dependências:
Se estiver usando npm:
```bash
npm i
```

Se estiver usando yarn:
```bash
yarn
```

5. Instale as dependências:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```bash
VITE_PUBLIC_KEY=YOUR_PUBLIC_KEY
VITE_PRIVATE_KEY=YOUR_PRIVATE_KEY
VITE_BASE_URL=https://gateway.marvel.com/v1/public
```

As chaves PUBLIC e PRIVATE podem ser obtidas criando uma conta na [API da Marvel](https://developer.marvel.com/). 
  
6. Para rodar o projeto em ambiente de desenvolvimento:
Se estiver usando npm:
```bash
npm run dev
```
  
Se estiver usando yarn:
```bash
yarn dev
```

7. Abra o navegador e acesse:
```bash
http://localhost:8080
```

## Como Obter as Chaves da API da Marvel

1. Acesse o site da Marvel Developer.
2. Crie uma conta ou faça login.
3. Navegue até a seção My Developer Account.
4. Gere suas chaves PUBLIC e PRIVATE.
5. Preencha o arquivo .env com as chaves e o BASE_URL da API.


## Funcionalidades
- [x] Busca de personagens e quadrinhos.
- [x] Visualização detalhada dos personagens.
- [x] Sistema de favoritos para personagens.
- [x] Paginação de resultados.
  
