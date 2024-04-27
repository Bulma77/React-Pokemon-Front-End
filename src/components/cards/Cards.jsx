import { Link } from "react-router-dom";
import "../cards/cards.css";
import Button from "../Button";

const Cards = ({ allPokemons, search, infoPoke }) => {
  return (
    <>
      <div className="left-content">
        <div className="pokemons-cards-left">
          {allPokemons
            .filter((pokemon) => {
              return pokemon.name.toLowerCase().includes(search.toLowerCase());
              // l'ajout de toLowerCase permet d'éviter que le search soit sensible à la casse.
            })
            .map((pokemon) => {
              return (
                <div
                  className="pokemons-cards"
                  key={pokemon.id}
                  onClick={() => infoPoke(pokemon)}
                >
                  <img
                    className="pokemons-img"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                  <p className="pokemons-text"># {pokemon.id}</p>
                  <h2 className="pokemons-title">{pokemon.name}</h2>
                </div>
              );
            })}
        </div>
        <Button />
      </div>

      <div className="pokemons-cards-tablet">
        {allPokemons
          .filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
            // l'ajout de toLowerCase permet d'éviter que le search soit sensible à la casse.
          })
          .map((pokemon) => {
            return (
              <Link
                to={`/pokemon/${pokemon.name}`}
                key={pokemon.id}
                className="pokemons-cards"
              >
                <div>
                  <img
                    className="pokemons-img"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                  <p className="pokemons-text"># {pokemon.id}</p>
                  <h2 className="pokemons-title">{pokemon.name}</h2>
                </div>
              </Link>
            );
          })}
        <Button />
      </div>
    </>
  );
};

export default Cards;
