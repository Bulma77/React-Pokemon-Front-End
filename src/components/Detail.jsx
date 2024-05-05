import typeColors from "../typeColors";

const Detail = ({ data }) => {
  return (
    <div className="detail-pokemon">
      {data.sprites.other.showdown.front_default ? (
        <img
          src={data.sprites.other.showdown.front_default}
          alt={`image ${data.name}`}
        />
      ) : (
        <img src={data.sprites.front_default} alt={`image ${data.name}`} />
      )}

      <h2>{data.name}</h2>
      <div className="pokemon-type">
        {data.types.map((type, index) => {
          //   console.log(type.type.name);
          return (
            <p
              key={index}
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </p>
          );
        })}
      </div>

      <div className="dimensions">
        <div>
          <p>Height</p>
          <p>{data.height}</p>
        </div>
        <div>
          <p>weight</p>
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
