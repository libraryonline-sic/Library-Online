import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/login";
import Homepage from "./components/homepage/Homepage";
import Register from "./components/register";
import Navbar from "./components/navbar/Navbar";
import Pembayaran from "./components/pembayaran/Pembayaran";
import Perpus from "./components/perpus/Perpus";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    {/* <Login /> */}
                </Route>
                <Route exact path="/homepage">
                    {/* <Homepage /> */}
                </Route>
                <Route exact path="/register">
                    {/* <Register /> */}
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
            </Switch>
        </Router>
    );
}

export default App;
