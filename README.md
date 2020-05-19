# [Data Lovers](https://laboratoria-projects.github.io/SAP004-data-lovers/src)

## Índice

* [1. Sobre](#1-sobre)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. História do usuário](#3-história-do-usuario)
* [4. Protótipo](#4-protótipo)
* [5. Pesquisa](#pesquisa)
* [6. Guia técnico](#6-guia-tecnico)

***

## 1. Sobre

Segundo a [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read)
90% dos dados que existem hoje foram gerados durante os últimos dois anos.
A cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem
precedentes.

Apesar disso, os dados por si só são de pouca utilidade. Para que essas grandes
quantidades de dados se convertam em **informação** compreensível para os
usuários, precisamos entender e processar estes dados. Uma forma simples de
fazer isso é criando _interfaces_ e _visualizações_.

Na imagem seguinte, você pode ver como os dados que estão na parte esquerda
podem ser usados para construir a interface amigável e compreensível que está
na parte direita.

![json-interface](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumo do projeto

Neste projeto você **construirá uma _página web_ para visualizar um conjunto
(set) de dados_** que se adeque às necessidades de seu usuário.

Como entregável final terá uma página web que permita **visualizar dados,
filtrá-los, ordená-los e fazer algum cálculo agregado**. Por cálculo agregado
nos referimos aos diversos cálculos que podem ser feitos com os dados para mostrar a
informação mais relevante para os usuários (médias, valores máximos e mínimos,
etc).

Para este projeto trazemos uma série de dados de _temáticas diferentes_ para
que você explore e decida com qual delas deseja trabalhar. Escolhemos
especificamente estes conjuntos de dados porque cremos que se adequem bem a
esta etapa de sua aprendizagem.

Uma vez que você defina sua área de interesse, busque entender quem é seu
usuário e o que exatamente ele necessita saber ou ver, para que assim possa
construir a interface que o ajude a interagir e entender melhor os dados.

Este são os dados que propomos:

* [Pokémon](src/data/pokemon/pokemon.json):
  Neste conjunto você encontrará uma lista com os 151 Pokémon da região de
  Kanto, com suas respectivas estatísticas utilizadas no jogo [Pokémon GO](http://pokemongolive.com).
  - [Pesquisa com jogadores de Pokémon Go](src/data/pokemon/README.pt-BR.md)
* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este conjunto mostra a lista de campeões do jogo League of
  Legends (LoL).
  - [Pesquisa com jogadores de LoL](src/data/lol/README.md)
* [Rick and Morty](src/data/rickandmorty/rickandmorty.json).
  Lista de personagens da série Rick & Morty. Você pode revisar a documentação
  da API neste [link](https://rickandmortyapi.com).
  - [Pesquisa com seguidores de Rick and Morty](src/data/rickandmorty/README.md)

## 3. História do usuário

O objetivo principal deste projeto é que aprenda a desenhar e construir uma
interface web onde se possa visualizar e manipular dados, entendendo o que o
usuário necessita.

Em outras palavras, você aprenderá a:

* Aplicar e aprofundar tudo o que aprendeu no projeto anterior.
* Pensar nas **necessidades dos usuários** para criar histórias de usuário.
* Escrever e trabalhar com **histórias de usuário**, suas definições de pronto
  (_definition of done_) e critérios de aceitação como ferramentas centrais
  de organização e planejamento de seu trabalho.
* Definir que dados utilizar e de que forma exibí-los em seu produto,
  baseando-se no seu **entendimento do usuário**.
* Iterar o desenho do produto, baseando-se nos resultados dos
  **testes de usabilidade**.
* Manipular **arrays e objetos**.
* **Manipular o DOM** (agregar elementos de forma dinâmica)
* **Manejar eventos do DOM** para permitir interação com o usuário (filtros,
  ordenação, etc).
* Entender os benefícios e complexidades de **trabalhar em equipe** em um
  ambiente de incerteza.

## 4. Protótipo

* Este projeto será executado em duplas.
* Este projeto será entregue através do GitHub e a interface deve ser publicada
  no [GitHub Pages](https://pages.github.com/).
* Tempo para completá-lo: três semanas.

## 5. Pesquisa

Os critérios considerados para que tenha terminado este projeto são:

### Definição de produto

Documente brevemente seu trabalho no arquivo `README.md` de seu repositório,
contando como foi o processo de desenho e como você acredita que o produto
possa resolver o problema (ou problemas) de seu usuário.

### Histórias de usuário

Uma vez que entenda a necessidade dos usuários, escreva as [Histórias de
Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representem
tudo que o usuário precisa fazer/ver. As **histórias de usuário** devem ser o
resultado de seu processo de investigação/pesquisa de seus usuários.

Não esqueça de incluir a definição de pronto (_definition of done_) e os
critérios de aceitação para cada uma.

Na medida do possível, termine uma história de usuário antes de passar para a
seguinte (cumpra com as definições de pronto + critérios de aceitação).

### Desenho de interface do usuário

#### Protótipo de baixa fidelidade

Durante seu trabalho você deverá fazer e iterar rascunhos de sua solução usando
lápis e papel. Recomendamos que fotografe todas as iterações que fizer, suba
para seu repositório e as mencione no `README.md`.

#### Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.

### Implementação da interface de usuário (HTML/CSS/JS)

Após desenhar sua interface de usuário, deverá trabalhar na sua implementação.
**Não** é necessário que construa a interface exatamente da mesma forma que
desenhou. Terá um tempo limitado para trabalhar no projeto, então você deve
priorizar as tarefas.

No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário interagir com a interface para obter as informações que necessita;
3. Ser _responsivo_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets, notebooks, etc.

### Testes unitários

O _boilerplate_ do projeto não inclui testes unitários. Assim, você terá que
escrever seus próprios testes para as funções encarregadas de _processar_,
_filtrar_ e _ordenar_ os dados, assim como _calcular_ estatísticas.

Seus testes unitários devem ter cobertura mínima de 70% de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_) do arquivo `src/data.js`, que irá conter suas funções e que está
detalhado na seção de [Considerações técnicas](#srcdatajs).

## 6. Guia técnico

* [ ] Usar VanillaJS.
* [ ] Não utilizar `this`.
* [ ] Passa pelo linter (`npm run pretest`)
* [ ] Passa pelos testes (`npm test`)
* [ ] Testes unitários cobrem um mínimo de 70% de statements, functions,
  lines e branches.
* [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui histórias de usuário no `README.md`.
* [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no
  `README.md`.
* [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no `README.md`.
* [ ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [ ] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [ ] UI: Permite filtrar dados com base em uma condição.
* [ ] UI: É _responsivo_.
