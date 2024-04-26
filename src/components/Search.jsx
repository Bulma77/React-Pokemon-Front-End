const Search = ({ setSearch }) => {
  const handleSearchPokemon = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Search your pokemon"
        name="search-form"
        id="search-form"
        onChange={handleSearchPokemon}
      />
    </div>
  );
};
export default Search;
