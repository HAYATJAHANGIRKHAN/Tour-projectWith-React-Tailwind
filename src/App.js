import React, { useState } from "react";
import data from './data.js';
import Tours from './Component/Tours';

const App = () => {
  const [tours, setTours] = useState(data);
  


    return (
      <div className="refresh">
        <Tours tours={tours}></Tours>
      </div>
    );
  


};

export default App;