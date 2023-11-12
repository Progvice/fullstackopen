import {useState} from 'react';
import './App.css'
import anecdotes from './consts/Anecdotes';

function App() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Generate anecdote</button>
      <div>
        {anecdotes[selected]}
      </div>
    </>
  )
}

export default App
