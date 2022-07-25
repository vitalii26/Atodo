import { ChangeEventHandler, FC } from "react";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  onChange: (value: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ onChange }) => {
  const handleQueryChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    onChange(value);
  };

  return (
    <div className={styles.searchPanel}>
      <input
        placeholder="Search"
        onChange={handleQueryChange}
        className={styles.searchPanel__input}
        type="search"
      />
    </div>
  );
};
