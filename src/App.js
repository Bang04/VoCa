import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as DayList from './component/DayList';
import Headers from './component/Header';
import Day from './component/Day'
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import './App.css';
import 'bulma/css/bulma.css'

function App() {

  return (
    <>
      <Headers />
      <Routes>
        <Route path ="/" element = {<DayList />} />
        <Route path ="/day/:day" element = { <Day /> } />
        <Route path = "/create_word" element = { <CreateWord /> } />
        <Route path = "/create_day" element = { <CreateDay /> } />
      </Routes>
    </>
  );
}

export default App;
