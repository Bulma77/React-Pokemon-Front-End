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
        console.log(response.data);
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
          const newIndex = index + 1;
          const imgpokemon =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/XXX.png".replace(
              "XXX",
              newIndex.toString()
            );
          console.log(imgpokemon);
          console.log(elem);
          return (
            <>
              <div className="type-pokemon-detail">
                <p>{elem.pokemon.name}</p>
                <img src={imgpokemon} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Typedetail;
