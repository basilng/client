import React from "react";
import { MemoryRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="pagetwo">Navigate to Page2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click me</button>
      <Link to="/">Navigate to Page1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <MemoryRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </MemoryRouter>
    </div>
  );
};

export default App;
