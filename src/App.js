import React from "react";
import "./App.css";
import Form from "./Form";

import WeatherContent from "./WeatherContent";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form temperature={2} city="Brussels" />
        <WeatherContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
