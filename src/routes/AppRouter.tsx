import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutesEnum } from "./types";
import { TodoPage, ErrorPage, AddTodoPage } from "@pages";

export const AppRouter: FC = () => {
  const routesList = [
    { path: AppRoutesEnum.Error, element: <ErrorPage /> },
    { path: AppRoutesEnum.Main, element: <TodoPage /> },
    { path: AppRoutesEnum.AddTodo, element: <AddTodoPage /> },
  ];

  const routes = routesList.map((route) => (
    <Route key={route.path} {...route} />
  ));

  return <Routes>{routes}</Routes>;
};
