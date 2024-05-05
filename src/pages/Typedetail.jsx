import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Loader from "../components/loader/Loader";

const Typedetail = () => {
  const [TypePokemon, setTypePokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${id}`
        );
        console.log(response.data.pokemon.pokemon);
        setTypePokemon(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h2>{TypePokemon.name}</h2>
      <div className="type-pokemon">
        {TypePokemon.pokemon.map((elem, index) => {
          console.log(elem);

          return (
            <div className="type-pokemon-detail" key={index}>
              <p>{elem.pokemon.name}</p>

              <p>{console.log(elem.pokemon.url)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Typedetail;
