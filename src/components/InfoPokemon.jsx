// import Stats from "../components/Stats";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

import typeColors from "../typeColors";
const InfoPokemon = (pokemon) => {
  console.log(pokemon);
  return (
    <>
      {!pokemon.pokemon ? (
        ""
      ) : (
        <>
          <div className="right-content">
            {pokemon.pokemon.sprites.other.showdown.front_default ? (
              <img
                src={pokemon.pokemon.sprites.other.showdown.front_default}
                alt={`image of ` + pokemon.pokemon.name}
              />
            ) : (
              <img
                src={
                  pokemon.pokemon.sprites.other["official-artwork"]
                    .front_default
                }
                alt={`image of ` + pokemon.pokemon.name}
              />
            )}
            <h2>{pokemon.pokemon.name}</h2>
            <div className="pokemon-type">
              {pokemon.pokemon.types.map((type, index) => {
                //   console.log(type.type.name);
                return (
                  <Link to={`/type/${type.type.name}`} key={index}>
                    <p style={{ backgroundColor: typeColors[type.type.name] }}>
                      {type.type.name}
                    </p>
                  </Link>
                );
              })}
            </div>
            <div className="dimensions">
              <div>
                <p>Height</p>
                <p>{pokemon.pokemon.height}</p>
              </div>
              <div>
                <p>weight</p>
                <p>{pokemon.pokemon.weight}</p>
              </div>
            </div>
            {pokemon.pokemon.abilities.map((details, index) => {
              console.log(details);
              console.log(pokemon);
              return (
                <div key={index} className="abilities">
                  <p>{details.ability.name}</p>
                </div>
              );
            })}
            <div className="stat">
              {pokemon.pokemon.stats.map((stat) => {
                console.log(stat);
                return (
                  <div className="stat-detail" key={stat.stat.name}>
                    <p>{stat.stat.name}</p> :
                    {/* <ProgressBar animated now={stat.base_stat} /> */}
                    <p>{stat.base_stat}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default InfoPokemon;
