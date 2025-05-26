import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Instructions from "./pages/Instructions";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/play" component={Game} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
