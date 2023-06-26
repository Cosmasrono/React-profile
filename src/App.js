import React from 'react';
 import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <Register />
          {/* <Login /> */}
        </div>
        
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
        <Login />
      </div>
    </div>
  );
}

export default App;
