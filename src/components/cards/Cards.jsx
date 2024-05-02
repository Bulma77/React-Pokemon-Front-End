import { Link } from "react-router-dom";
import "../cards/cards.css";
import Button from "../Button";

const Cards = ({ allPokemons, search, infoPoke, setLoadMore }) => {
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
              console.log(pokemon);
              return pokemon.sprites.front_default ? (
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
                  {pokemon.types.map((type) => {
                    // <option key={type.type.name} value={type.type.name}>
                    //   {type.type.name}
                    // </option>;
                    console.log(type.type.name);
                    return (
                      <div key={type.type.name}>
                        <p>{type.type.name}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              );
            })}
        </div>
        <Button setLoadMore={setLoadMore} />
      </div>

      <div className="pokemons-cards-tablet">
        {allPokemons
          .filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
            // l'ajout de toLowerCase permet d'éviter que le search soit sensible à la casse.
          })
          .map((pokemon) => {
            return pokemon.sprites.front_default ? (
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
                  {pokemon.types.map((type) => {
                    // <option key={type.type.name} value={type.type.name}>
                    //   {type.type.name}
                    // </option>;
                    console.log(type.type.name);
                    return (
                      <div key={type.type.name}>
                        <p>{type.type.name}</p>
                      </div>
                    );
                  })}
                </div>
              </Link>
            ) : (
              ""
            );
          })}
        <Button setLoadMore={setLoadMore} />
      </div>
    </>
  );
};

export default Cards;
