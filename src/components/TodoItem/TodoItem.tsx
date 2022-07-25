import { FC, useState } from "react";
import cn from "classnames";
import { ReactComponent as ArrowIcon } from "../../assets/ArrowIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/CloseIcon.svg";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  creationalDate: string;
  isCompleted: boolean;
  title: string;
  text: string;
  onDeleteBtnClick: () => void;
  onCheckBtnClick: () => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  creationalDate,
  isCompleted,
  title,
  text,
  onDeleteBtnClick,
  onCheckBtnClick,
}) => {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText((showText) => !showText);
  };

  return (
    <li className={styles.item}>
      <div className={styles.item__header}>
        <input
          className={styles.item__checkbox}
          type="checkbox"
          checked={isCompleted}
          onChange={onCheckBtnClick}
          id={creationalDate}
        />
        <label
          htmlFor={creationalDate}
          className={cn(styles.item__title, {
            [styles.crossedOut]: isCompleted,
          })}
        >
          {title}
        </label>
        <div className={styles.item__controls}>
          <CloseIcon
            className={styles.item__button}
            onClick={onDeleteBtnClick}
          />
          <ArrowIcon className={styles.item__button} onClick={handleShowText} />
        </div>
      </div>
      {showText && (
        <p className={styles.item__description}>
          <span
            className={cn(styles.item__text, {
              [styles.crossedOut]: isCompleted,
            })}
          >
            {text}
          </span>
          <span className={styles.item__date}>{creationalDate}</span>
        </p>
      )}
    </li>
  );
};
