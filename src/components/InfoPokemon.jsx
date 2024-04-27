const InfoPokemon = (pokemon) => {
  console.log(pokemon);
  return (
    <>
      {!pokemon.pokemon ? (
        ""
      ) : (
        <>
          <div className="right-content">
            <img
              src={pokemon.pokemon.sprites.other.showdown.front_default}
              alt=""
            />
            <p>{pokemon.pokemon.name}</p>
            <div className="types">
              {pokemon.pokemon.types.map((type, index) => {
                //   console.log(type.type.name);
                return (
                  <div key={index}>
                    <p>{type.type.name}</p>
                  </div>
                );
              })}
            </div>

            <div className="dimensions">
              <div>
                <h3>Height</h3>
                <p>{pokemon.pokemon.height}</p>
              </div>
              <div>
                <h3>weight</h3>
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
                    <p>{stat.stat.name}</p>
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
