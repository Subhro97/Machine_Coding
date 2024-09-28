import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SearchListPage from "./pages/SearchListPage";
import ContextCart from "./pages/ContextCart";
import ReduxCartPage from "./pages/ReduxCartPage";
import HOCPage from "./pages/HOCPage";
import AccordianPage from "./pages/AccordianPage";
import ProgressBarPage from "./pages/ProgressBarPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import FileExplorerPage from "./pages/FileExplorerPage";
import FileExplorerPage2 from "./pages/FileExplorerPage2";
import CommentBoxPage from "./pages/CommentBoxPage";
import StepperPage from "./pages/StepperPage";
import MultiselectPage from "./pages/MultiselectPage";
import CiscoPage from "./pages/CiscoPage";
import ErrorPage from "./pages/ErrorPage";
import TicTacToePage from "./pages/TicTacToePage";
import SelectableGridsPage from "./pages/SelectableGridsPage";
import TimerPage from "./pages/TimerPage";
import CartPage from "./pages/CartPage";
import GridLightsPage from "./pages/GridLightsPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <StartPage /> },
      {
        path: "hoc",
        element: <HOCPage />,
      },
      {
        path: "search-list",
        element: <SearchListPage />,
      },
      {
        path: "context-cart",
        element: <ContextCart />,
      },
      {
        path: "redux-cart",
        element: <ReduxCartPage />,
      },
      {
        path: "accordian",
        element: <AccordianPage />,
      },
      {
        path: "file-explorer",
        element: <FileExplorerPage />,
      },
      {
        path: "file-explorer-two",
        element: <FileExplorerPage2 />,
      },
      {
        path: "progress-bar",
        element: <ProgressBarPage />,
      },
      {
        path: "comment-box",
        element: <CommentBoxPage />,
      },
      {
        path: "stepper",
        element: <StepperPage />,
      },
      {
        path: "multi-select",
        element: <MultiselectPage />,
      },
      {
        path: "cisco",
        element: <CiscoPage />,
      },
      {
        path: "tic-tac-toe",
        element: <TicTacToePage />,
      },
      {
        path: "selectable-grids",
        element: <SelectableGridsPage />,
      },
      {
        path: "timer-page",
        element: <TimerPage />,
      },
      {
        path: "cart-page",
        element: <CartPage />,
      },
      {
        path: "grid-lights-page",
        element: <GridLightsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
