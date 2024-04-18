import "../assets/cards.css";

const Cards = ({ data }) => {
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
          return (
            <div className="pokemons-cards" key={index}>
              <img className="pokemons-img" src={img} alt={pokemon.name} />
              <p className="pokemons-text">{newIndex}</p>
              <h2 className="pokemons-title">{pokemon.name}</h2>
              <div className="pokemons-type"></div>
            </div>
          );
        })}
        ;{" "}
      </div>
    </section>
  );
};

export default Cards;
