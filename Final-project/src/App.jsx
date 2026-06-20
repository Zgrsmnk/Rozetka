import { Route, Routes } from "react-router";
import { Provider } from "react-redux";
import "./App.css";
import Login from "./pages/Login/Login";
import { routes } from "./constants/routes";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {Object.keys(routes).map((item) => (
            <Route
              key={routes[item].id}
              element={routes[item].element}
              path={routes[item].path}
            />
          ))}
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
