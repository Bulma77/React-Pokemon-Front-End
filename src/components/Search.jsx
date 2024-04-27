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
    // <div id="search-bar-container" class="row container margin-40">
    //         <input id="search-input" onkeydown="search()" placeholder="Search your Pokemon">
    //         <div id="start-search-button" class="center">
    //             <i class="fas fa-search"></i>
    //         </div>
    //     </div>
  );
};
export default Search;
