import { useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TodosWrapper from "./components/TodosWrapper";
import routes from "./routes";
import CartContextProvider from "./context/cartContext";

function App() {
  const router = useRoutes(routes);
  return (
    <CartContextProvider>
      {" "}
      <Header />
      <TodosWrapper />
      {router}
    </CartContextProvider>
  );
}

export default App;
