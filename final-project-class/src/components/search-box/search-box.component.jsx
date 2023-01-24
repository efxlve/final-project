import './search-box.styles.css';

const SearchBox = ({ className, placeholder, searchField }) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={searchField}
    />
);

export default SearchBox;