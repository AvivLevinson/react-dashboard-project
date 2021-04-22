import "./App.css";
import "antd/dist/antd.css";

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import MainLayout from './components/MainLayout';



function App() {
  return (
    <div className="App">
      <MainLayout/>
    </div>
  );
}

export default App;
