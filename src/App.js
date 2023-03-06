import "./App.css";
import Navbar from "./Components/Navbar";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nothing from "./Components/Nothing";


function App(){
  return (
    <>
    <div>
      <Navbar ></Navbar>
      <Router>
        <Switch>
          <Route path="/n">
            <Nav/>
          </Route>
          <Route path="/">
            <Nothing/>
          </Route>
        </Switch>
      </Router>
      
    </div>
    </>
  );
}

export default App;
