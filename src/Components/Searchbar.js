export default function SearchBar({ filterText, onFilterTextChange }) {
    return (
      <form className="searchBar">
        <input
          className="input_box"
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </form>
    );
  }