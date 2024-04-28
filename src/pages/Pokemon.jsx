import { useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";

// Import Loader
// import Loader from "../components/Loader";

// Import card
import Cards from "../components/cards/Cards";

import InfoPokemon from "../components/InfoPokemon";

// import Search
import Search from "../components/Search";

// import Fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

const Pokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokedex, setPokedex] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=21"
  );

  const [search, setSearch] = useState("");

  //Afin d'éviter que useEffect ne monte deux fois (éviter qu'il affiche les données en double) rajouter le code suivant :const ShouldGetAllPokemon = useRef(true) useEffect(() => { if(ShouldGetAllPokemon.current) { ShouldGetAllPokemon.current = false getAllPokemons() } }, [])
  //Autre solution pour eviter que useEffectne monte deu fois: supprimer les balises <React.StrictMode> dans main.jsx
  const ShouldGetAllPokemon = useRef(true);

  useEffect(() => {
    {
      if (ShouldGetAllPokemon.current) {
        ShouldGetAllPokemon.current = false;
        const getAllPokemons = async () => {
          const response = await axios.get(loadMore);
          console.log(response.data);
          setLoadMore(response.data.next);

          const getPokemon = (results) => {
            results.map(async (pokemon) => {
              const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
              );
              setAllPokemons((pokemonList) => [...pokemonList, response.data]);
              allPokemons.sort((a, b) => a.id - b.id);
            });
          };
          getPokemon(response.data.results);
          setIsLoading(false);
        };

        getAllPokemons();
      }
    }
  }, []);

  return isLoading ? (
    <p>Loading in progress...</p>
  ) : (
    <>
      {/* <section className="all-pokemons"></section> */}
      <Search setSearch={setSearch} />
      <div className="all-pokemons">
        <Cards
          allPokemons={allPokemons}
          search={search}
          infoPoke={(poke) => setPokedex(poke)}
          setLoadMore={setLoadMore}
        />

        <InfoPokemon pokemon={pokedex} />
      </div>
      <section />
    </>
  );
};
export default Pokemon;
