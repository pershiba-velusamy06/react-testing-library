import React from 'react';
import './App.css';
import { Application } from './components/application/Application';
import Skills from './components/skills/Skills';
import { Counter } from './components/counter/Counter';
import { MuiMode } from './components/mui/MuiMode';

function App() {
  return (
    <div className="App">
   {/* <Application/> */}
   <MuiMode/>
   <Skills skills={['HTML', 'CSS', 'JavaScript']}/>
   <Counter/>
    </div>
  );
}

export default App;
