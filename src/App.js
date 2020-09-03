import React from "react";
import "./App.css";
import Form from "./Form";
import Location from "./Location";

import NextHours from "./NextHours";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row my-card">
          <Form temperature={2} city="Brussels" />
          <Location value="img" />
          <NextHours />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
