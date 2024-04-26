import "../cards/cards.css";

// import Detail from "../components/Detail";
import { useState } from "react";

const Cards = ({ allPokemons }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <section className="all-pokemons">
      <div className="left-content">
        <div className="pokemons-cards-left">
          {allPokemons.map((pokemon) => {
            console.log(pokemon);
            const handleClick = () => {
              setSelectedPokemon(pokemon.id);
              console.log(pokemon.id);
            };

            return (
              <div
                className="pokemons-cards"
                key={pokemon.id}
                onClick={handleClick}
              >
                <img
                  className="pokemons-img"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <p className="pokemons-text">{pokemon.id}</p>
                <h2 className="pokemons-title">{pokemon.name}</h2>
              </div>
            );
          })}
        </div>
        <div className="btn">
          <button className="load-more">Load More</button>

          {/* <button className="load-more" onClick={() => loadMore()}>
            Load More
          </button> */}
        </div>
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
