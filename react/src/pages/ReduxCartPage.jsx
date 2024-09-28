import { Provider } from "react-redux";
import ReduxCart from "../components/reduxCart/index.jsx";

import { store } from "@/redux/store.js";

const ReduxCartPage = () => {
  return (
    <Provider store={store}>
      <ReduxCart />
    </Provider>
  );
};

export default ReduxCartPage;
