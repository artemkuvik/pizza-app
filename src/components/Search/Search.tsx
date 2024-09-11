import { useEffect } from "react";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import cn from "classnames";

function Search({ value, onChange, isActive }: SearchProps) {
  useEffect(() => {}, [isActive]);
  return (
    <input
      className={cn(styles.input, {
        [styles.active]: isActive,
        [styles.noactive]: !isActive,
      })}
      type="text"
      placeholder="Введите блюдо или состав"
      value={value}
      onChange={onChange}
    />
  );
}

export default Search;
