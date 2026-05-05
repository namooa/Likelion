import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Todolist from "./components/Todolist";
import "../src/assets/style.scss";

const App = () => {
  return (
    <BrowserRouter>
          <Todolist/>
    </BrowserRouter>
  )
}
export default App