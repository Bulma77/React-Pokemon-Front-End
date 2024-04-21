import "../assets/cards.css";

// import Detail from "../components/Detail";
import { useState } from "react";

const Cards = ({ data }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <section className="all-pokemons">
      <div className="pokemons-cards-left">
        {data.results.map((pokemon, index) => {
          const newIndex = index + 1;
          const img =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/XXX.png".replace(
              "XXX",
              newIndex.toString()
            );
          const handleClick = () => {
            console.log("toto");
            const id = newIndex;
            setSelectedPokemon(id);
            console.log(id);
          };

          return (
            <div className="pokemons-cards" key={index} onClick={handleClick}>
              <img className="pokemons-img" src={img} alt={pokemon.name} />
              <p className="pokemons-text">{newIndex}</p>
              <h2 className="pokemons-title">{pokemon.name}</h2>
              <div className="pokemons-type"></div>
            </div>
          );
        })}
        ;
      </div>
      <div className="pokemon-card-right">
        {selectedPokemon === null ? (
          <div>
            <p>cool</p>
          </div>
        ) : (
          <div>Test</div>
        )}
      </div>
    </section>
  );
};

export default Cards;
