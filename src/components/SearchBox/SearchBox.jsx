import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(changeFilter(e.target.value));
  const filter = useSelector((state) => state.filters.name);

  return (
    <div className={s.container}>
      <label htmlFor="filter"> Find contacts by name </label>

      <input
        className={s.input}
        id="filter"
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
