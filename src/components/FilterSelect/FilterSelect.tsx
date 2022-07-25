import { ChangeEventHandler, FC } from "react";
import { SortOptionsEnum } from "@store/todo/types";
import styles from "./FilterSelect.module.scss";

interface FilterSelectProps {
  defaultValue: SortOptionsEnum;
  onChange: (value: string) => void;
  optionValues: SortOptionsEnum[];
}

export const FilterSelect: FC<FilterSelectProps> = ({
  defaultValue,
  optionValues,
  onChange,
}) => {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    onChange(value);
  };

  return (
    <select
      onChange={handleChange}
      className={styles.select}
      defaultValue={defaultValue}
    >
      {optionValues.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
