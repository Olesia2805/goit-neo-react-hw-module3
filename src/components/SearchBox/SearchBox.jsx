import boxCss from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <>
      <input
        className={boxCss.filterBox}
        type="text"
        id="find_contacts"
        name="filter"
        minLength="2"
        maxLength="50"
        required
      />
      <label htmlFor="find_contacts" className={boxCss.text}>
        Find contacts by name
      </label>
    </>
  );
};

export default SearchBox;
