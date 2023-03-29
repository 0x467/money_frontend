import { createHashRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { TransactionAdd } from "./pages/transaction-add/transaction-add";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/transaction/add",
    element: <TransactionAdd />,
  },
]);
