import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DayList from './component/DayList';
import Headers from './component/Header';
import Day from './component/Day'
import './App.css';
import 'bulma/css/bulma.css'

function App() {

  return (
    <>
      <Headers />
      <Routes>
        <Route path ="/" element = {<DayList />} />
        <Route path ="/day/:day" element = { <Day /> } />
        <Route element = { <errorPage /> } />
      </Routes>
    </>
  );
}

export default App;
