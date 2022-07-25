import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@hooks";
import { SortOptionsEnum } from "@store/todo/types";
import {
  selectFilteredTodos,
  setSearchQuery,
  setSortTodos,
  toggleTodoComplete,
  deleteTodo,
} from "@store/todo/todosSlice";
import { AppRoutesEnum } from "@routes";
import { SearchInput, TodoItem, FilterSelect, Button } from "@components";
import styles from "./TodoPage.module.scss";

export const TodoPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const filteredTodos = useAppSelector(selectFilteredTodos);

  const handleDeleteTodoClick = (createdAt: string) => () => {
    dispatch(deleteTodo(createdAt));
  };

  const handleCheckTodoClick = (createdAt: string) => () => {
    dispatch(toggleTodoComplete(createdAt));
  };

  const handleSearchQueryChange = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  const handleFilterChange = (value: string) => {
    dispatch(setSortTodos(value));
  };

  const handleCreateNewBtnClick = () => {
    navigate(AppRoutesEnum.AddTodo);
  };

  useEffect(() => {
    dispatch(setSortTodos(SortOptionsEnum.Oldest));
    dispatch(setSearchQuery(""));
  }, []);

  const todoItems = filteredTodos.map(
    ({ title, text, createdAt, isCompleted }) => (
      <TodoItem
        key={createdAt}
        isCompleted={isCompleted}
        title={title}
        text={text}
        creationalDate={createdAt}
        onDeleteBtnClick={handleDeleteTodoClick(createdAt)}
        onCheckBtnClick={handleCheckTodoClick(createdAt)}
      />
    )
  );

  return (
    <div className={styles.todoPage}>
      <div className={styles.controlPanel}>
        <SearchInput onChange={handleSearchQueryChange} />
        <FilterSelect
          defaultValue={SortOptionsEnum.Oldest}
          onChange={handleFilterChange}
          optionValues={Object.values(SortOptionsEnum)}
        />
      </div>
      <ul className={styles.todoPage__items}>
        {filteredTodos.length ? todoItems : <span>No todos..</span>}
      </ul>
      <Button onClick={handleCreateNewBtnClick}>Create new todo</Button>
    </div>
  );
};
