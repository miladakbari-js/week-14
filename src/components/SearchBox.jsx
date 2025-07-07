import { useState } from "react";
import styles from "./SearchBox.module.css"

function SearchBox({ searchHandler }) {
  const [search, setSearch] = useState("");

  const changeHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
    searchHandler(value);
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search contacts..."
        value={search}
        onChange={changeHandler}
      />
      
    </div>
  );
}

export default SearchBox;
