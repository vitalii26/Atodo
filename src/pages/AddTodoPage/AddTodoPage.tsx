import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks";
import { addTodo } from "@store/todo/todosSlice";
import { AppRoutesEnum } from "@routes";
import { Button } from "@components";
import styles from "./AddTodoPage.module.scss";

export const AddTodoPage: FC = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setTitle(value);
  };

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    setText(value);
  };

  const handleAddTodo: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      text,
      createdAt: new Date().toLocaleString(),
      isCompleted: false,
    };

    if (newTodo.title && newTodo.text) {
      dispatch(addTodo(newTodo));
      navigate(AppRoutesEnum.Main);
    }
  };

  return (
    <div className={styles.addPage}>
      <h2 className={styles.addPage__title}>Add new Todo</h2>
      <form className={styles.addPage__form}>
        <label className={styles.addPage_label} htmlFor="title">
          Title:
        </label>
        <input
          id="title"
          type="text"
          className={styles.addPage__input}
          value={title}
          onChange={handleTitleChange}
        />
        <label className={styles.addPage_label} htmlFor="text">
          Text:
        </label>
        <textarea
          id="text"
          value={text}
          onChange={handleTextChange}
          className={styles.addPage__input}
        />
        <Button onClick={handleAddTodo}>Add todo</Button>
      </form>
    </div>
  );
};
