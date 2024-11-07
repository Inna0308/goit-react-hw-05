import styles from "./SearchInput.module.css";

const SearchInput = ({ setSearchParams }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.value.value;
    setSearchParams({ q: value });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" name="value" placeholder="Enter movie name" />

      <button className={styles.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
