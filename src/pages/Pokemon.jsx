import { useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";

// Import Loader
// import Loader from "../components/Loader";

// Import card
import Cards from "../components/cards/Cards";

// import Search
import Search from "../components/Search";

const Pokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
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
      <Search setSearch={setSearch} />
      <section className="all-pokemons">
        <Cards allPokemons={allPokemons} search={search} />
        <div className="right-coontent"></div>
      </section>
    </>
  );
};
export default Pokemon;
