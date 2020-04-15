import React from 'react';
import NavBar from "./components/NavBar/NavBar"
import './App.scss';
import TourList from './components/TourList'
function App() {
  return (
    <main>
      <NavBar />
      <TourList />
    </main>
  );
}

export default App;
