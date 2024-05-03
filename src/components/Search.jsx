import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ setSearch }) => {
  const handleSearchPokemon = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search your pokemon"
        name="search-form"
        id="search-form"
        onChange={handleSearchPokemon}
      />
      <div className="search-btn">
        <FontAwesomeIcon icon="magnifying-glass" />
      </div>
    </div>
  );
};
export default Search;
