import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>pagina da ac2!</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
