import "./App.scss";
import { BrowserRouter, Route, Switch } from "../node_modules/react-router-dom";
import Login from "./components/login/Login";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/inicio" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
