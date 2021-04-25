# Podcastr

## Sobre o projeto

Podcastr é uma aplicação Front-end e mobile construída durante a 5ª edição da NextLevelWeek (#nlw5), evento organizado pela [Rocketseat](https://nextlevelweek.com/ "Site da NextLevelWeek").

A aplicação é bem parecida com Aplicativos ou Websites de músicas, mas por enquanto rodando apenas podcasts.

Pensando em diferencia-la fiz questão de deixar-la totalmente responsiva e com uma troca de temas entre Light e Dark.

### Aprendizado / Experiência

Alguns dos meus maiores aprendizados ao desenvolver esta aplicação foram os conceitos e tecnologias embutidas no Next.js, tais como, SSR (Server side rendering) e SSG (Static site generation) para uma melhor indexação e experiência.

A explicação desses conceitos são bem simples, o SSR gera todo o HTML, CSS e Javascript pelo servidor do Next (Node.js) e então entrega tudo de uma vez para o cliente com a interface montada. Diferente de aplicações desenvolvidas somente em ReactJS que a interface é montada totalmente com o Javascript no momento em que o site é aberto, o Next entrega esse benefício que ajuda na indexação do conteúdo.
No entanto o SSG nos dá um controle para que possamos gerar todas as páginas estáticas no momento da Build do projeto, ou então podemos fazer com que as páginas sejam geradas assim que o usuário acesse a mesma. Pode-se entender que a geração da página seja como um Cache no qual é feita apenas uma requisição para buscar os conteúdos (Caso haja conteúdo para buscar) e depois apenas é fornecida a interface pronta. Importante lembrar também que é totalmente configurável o intervalo de geração das páginas.


## Layout Web
### Dark
![Web_Dark](https://user-images.githubusercontent.com/71713087/116012204-8dd93d00-a5ff-11eb-8ef4-ce3fe43a2ffa.png)

### Light
![Web_Light](https://user-images.githubusercontent.com/71713087/116012017-65047800-a5fe-11eb-80a6-0d4fb12f06d1.png)


## Layout Mobile

### Light
![Mobile_Light](https://user-images.githubusercontent.com/71713087/116012045-8d8c7200-a5fe-11eb-8e10-38e6f0dc7cdd.png)

### Dark
![Mobile_Dark](https://user-images.githubusercontent.com/71713087/116012187-77cb7c80-a5ff-11eb-85db-0884cc1857e9.png)


# Tecnologias utilizadas

## Front end
- Next.js
- Typescript
- Styled Components

# Como executar o projeto

## Front-End web
Pré-requisitos: npm / yarn

```bash

# Clonar repositório
git clone https://github.com/Nypeeh/podcastr-next.git

# Entrar na pasta do projeto Front-End web
cd podcastr-next

# Instalar dependências
yarn

# Executar o projeto

# No primeiro console rode
yarn server

# No segundo rode
yarn dev

```

# Autor

* Leonardo Armejo (Linkedin: https://www.linkedin.com/in/leonardo-armejo-7ab971203/)
