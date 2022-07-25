import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@routes";
import { Header } from "@components";

const App: FC = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
