import { FC } from "react";
import styles from "./ErrorPage.module.scss";

interface ErrorPageProps {
  message?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({
  message = "Something went wrong",
}) => {
  return <div className={styles.errorPage}>{message}</div>;
};
