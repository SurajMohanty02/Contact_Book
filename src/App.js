import logo from "./logo.svg";
import "./App.css";
import Nav from "./Component/Nav";
import Contact from "./Component/Contact";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddContact from "./Component/AddContact";
import EditContact from "./Component/EditContact";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Contact} />
              <Route path="/Add-contact" component={AddContact} />
              <Route path="/Edit-contact/:id" component={EditContact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
