import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/login/Login";
import Homepage from "./components/homepage/Homepage";
import Register from "./components/register/Regist";
import Navbar from "./components/navbar/Navbar";
import Pembayaran from "./components/pembayaran/Pembayaran";
import Perpus from "./components/perpus/Perpus";
import Tampilanawal from "./components/Tampilanawal/Tampilanawal";
import Memilihroom from "./components/memilihroom/Memilihroom";
import Baca from "./components/Halamanbaca/Halamanbaca";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/pembayaran">
          <Pembayaran />
        </Route>
        <Route exact path="/pembayaran">
          <Pembayaran />
        </Route>
        <Route exact path="/perpus">
          <Perpus />
        </Route>
        <Route exact path="/tampilanawal">
          <Tampilanawal />
        </Route>
        <Route exact path="/memilihroom">
          <Memilihroom />
        </Route>
        <Route exact path="/halamanbaca">
          <Baca />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
