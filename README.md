# React POKEMON

## Résumé

Creation of the React (+ Vite.js) responsive Front-End POKEMON using the API : https://pokeapi.co/.

Méthode HTTP : GET

The user can navigate between the following pages:

- A home page
- A pokemon page that displays pokemons by 21 : https://pokeapi.co/api/v2/pokemon/

1. A Load More button lets you buy 21 more pokemons with each click, and a button on the right returns you to the very top of the list.
2. click on the pokemon to display details : name, type, statistics, abilities, weight, size.
3. Ability to search for a pokemon from the search bar.
4. possibility of displaying pokemon details from the url

- A 404 page for non-existent routes

## Requirements

Integrated development environment used: Visual Studio Code

### Commands used to create and launch the project

- Using the **yarn** package = npm install -g yarn. To avoid conflicts, always install dependencies with **yarn add** and not with npm install.
- Initializing the React project with vite.js :

1. yarn create vite React-Pokemon-Front-End --template react
2. cd React-Pokemon-Front-End
3. yarn (install dependencies listed in package.json)
4. yarn dev (project launch)

### Commands used to run the project

- To make HTTP requests: yarn add axios.
- To enable navigation between pages: yarn add.
- To make the header responsive: use React Bootstrap:

1. yarn add bootstrap
2. import 'bootstrap/dist/css/bootstrap.min.css' (in the main.jsx)
3. <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
     integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
     crossorigin="anonymous"
   /> (in the head de index.html)

For Boostrap see https://react-bootstrap.netlify.app/

## Local project setup

1. git clone https://github.com/pricilliaEDOU2/React-Pokemon-Front-End.git
2. yarn
3. yarn dev

## Build with

### Langages

- HTML
- CSS
- Javascript

### Libraries

- **React**
- **React Router** : adds navigation to a React site.
- **React Bootstrap**
- **Vite.js** : compiler (bundler): bundles multiple source files, such as JavaScript, CSS and other file types, into a single file optimized for production.
- **Axios** : Enables HTTP requests to be made.

### Tools

- **ESLint** : popular tool used in software development to ensure the quality of JavaScript code

## Links

- To view the site :

  deployment of the site on Netlify (https://docs.netlify.com/)

- Pour visualiser le code : https://github.com/pricilliaEDOU2/React-Pokemon-Front-End.
