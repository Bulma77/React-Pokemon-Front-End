import { useState, useEffect } from "react";
import axios from "axios";

// Import Loader
import Loader from "../components/Loader";

// Import card
import Cards from "../components/Cards";

const Pokemon = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // selection pokemon

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302"
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    // <p> Loading in progress...</p>
    <Loader />
  ) : (
    <>
      <div>
        <h1>Pokemons</h1>
        <Cards data={data} />
      </div>
      {/* {selectedPokemon === null ? (
        <div>
          <h1>Pokemons</h1>
          <Cards data={data} />
        </div>
      ) : (
        <div>Test</div>
      )} */}
    </>
  );
};
export default Pokemon;
