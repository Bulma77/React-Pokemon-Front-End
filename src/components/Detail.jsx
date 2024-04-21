const Detail = ({ data, id }) => {
  const gif =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/XXX.gif".replace(
      "XXX",
      id.toString()
    );
  return (
    <div>
      <img src={gif} alt={data.name} />
      <p>{data.name}</p>
      <div className="types">
        {data.types.map((type, index) => {
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
          <p>{data.height}</p>
        </div>
        <div>
          <h3>weight</h3>
          <p>{data.weight}</p>
        </div>
      </div>
      {data.abilities.map((details, index) => {
        console.log(details);
        console.log(data);
        return (
          <div key={index} className="abilities">
            <p>{details.ability.name}</p>
          </div>
        );
      })}
      <div className="stat">
        {data.stats.map((stat) => {
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
  );
};
export default Detail;
