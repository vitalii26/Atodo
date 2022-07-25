import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppRoutesEnum } from "@routes";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__logo} to={AppRoutesEnum.Main}>
        Todo App
      </Link>
      <nav className={styles.header__nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.header__link
          }
          to={AppRoutesEnum.Main}
        >
          Todos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.header__link
          }
          to={AppRoutesEnum.AddTodo}
        >
          Add Todo
        </NavLink>
      </nav>
    </header>
  );
};
