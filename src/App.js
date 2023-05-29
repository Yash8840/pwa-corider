import React, { useCallback, useEffect, useState } from "react";
import { fetchChats } from "./api/fetchChats";
import './App.css'
import Home from "./Home";



 function App() {

    return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
