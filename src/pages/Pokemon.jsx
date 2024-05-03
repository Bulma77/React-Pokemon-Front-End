import { useState, useEffect } from "react";
import axios from "axios";

// Import Loader
// import Loader from "../components/Loader";

// Import card
import Cards from "../components/cards/Cards";

import InfoPokemon from "../components/InfoPokemon";

// import Search
import Search from "../components/Search";

// import Fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

const Pokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokedex, setPokedex] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=21"
  );

  const [search, setSearch] = useState("");

  const getAllPokemons = async () => {
    const response = await axios.get(loadMore);
    console.log(response.data);
    setLoadMore(response.data.next);

    const getPokemon = (results) => {
      results.map(async (pokemon) => {
        console.log(pokemon);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setAllPokemons((pokemonList) => [...pokemonList, response.data]);
        allPokemons.sort((a, b) => a.id - b.id);
      });
    };
    getPokemon(response.data.results);
    console.log(response.data.results);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return isLoading ? (
    <p>Loading in progress...</p>
  ) : (
    <>
      <Search setSearch={setSearch} allPokemons={allPokemons} />

      <div className="all-pokemons">
        <div className="left-content">
          <Cards
            allPokemons={allPokemons}
            search={search}
            setSearch={setSearch}
            infoPoke={(poke) => setPokedex(poke)}
          />
          {setLoadMore && (
            <button className="btn" onClick={() => getAllPokemons()}>
              Load More
            </button>
          )}
        </div>

        <InfoPokemon pokemon={pokedex} />
      </div>
    </>
  );
};
export default Pokemon;
