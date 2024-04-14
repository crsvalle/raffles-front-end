export default function SearchBar({ filterText, onFilterTextChange }) {
    return (
      <form className="searchBarContainer">
        <input
          className="input_box searchInput"
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </form>
    );
  }