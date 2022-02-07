# Marvel

## Requisitos Funcionais

* Crie uma lista de cards para exibir os personagens mostrando a imagem e o nome
* Possibilite o usuário buscar personagens em todos os personagens da base
* Na lista o usuário pode ir para a página de detalhes do personagem e ver a lista de series dele
* Crie um formulário para editar um personagem Marvel (salvando apenas no client-side)

## Requisitos não Funcionais

* Usar React
* Utilize o create-react-app como base
* Utilize redux para gerenciar o estado
* Utilize react-router para trocar de página
* Utilize @testing-library/react para testes

## Rodando o projeto
### `npm start`

Rode o comando acima para iniciar a aplicação localmente.

### `npm test`

Rode o comando acima para testar a aplicação.

## Deploy

O deploy está sendo feito utilizando a Vercel. Qualquer commit que é feito na master o deploy acontece automaticamente.

Para conferir a aplicação basta clicar [aqui](https://softplayer-challenge.vercel.app/)

## Tour pela aplicação

Ao inicializar a aplicação temos a página Home, onde é exibido a listagem dos cards dos personagens com imagem/nome e a barra de busca para filtrar os personagens. 

Os cards possuem dois ícones que ao passar o mouse por cima possuem um titulo. Basicamente, eles servem para editar e visualizar os detalhes do card específico.

Ao clicar em editar, temos um formulário onde é possível editar o nome do personagem e este nome é salvo no state do Redux e persistido na pagina Home.

Ao clicar em detalhes, temos a página a detalhes onde é exibido a imagem do personagem, seu nome, descrição e suas séries.