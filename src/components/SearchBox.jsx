import { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";

function SearchBox({ searchHandler, clearSearch, setClearSearch }) {
  const [search, setSearch] = useState("");

  const changeHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  useEffect(()=>{
    if(clearSearch){
      setSearch("")
      setClearSearch(false)
    }
  },[clearSearch])
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search contacts..."
        value={search}
        onChange={changeHandler}
      />
      <button className={styles.searchbutton} onClick={() => searchHandler(search)}>search</button>
    </div>
  );
}

export default SearchBox;
