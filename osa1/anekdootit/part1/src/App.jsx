import {useState} from 'react';
import './App.css'
import anecdotes from './consts/Anecdotes';

function App() {
  const [selected, setSelected] = useState(0);
  const [scoreList, setScoreList] = useState([]);

  const generateScores = () => {
    const list = [];
    for(let counter = 0; counter < anecdotes.length; counter++) {
      list.push(0);
    }
    setScoreList(list);
  }
  scoreList.length === 0 ? generateScores() : null;
  return (
    <>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Generate anecdote</button>
      <div>
        {anecdotes[selected]}
        <button onClick={() => {
          let updatedList = [...scoreList];
          updatedList[selected] = updatedList[selected] + 1;
          setScoreList(updatedList);
        }}>Vote</button>
        <p>Has {scoreList[selected]} votes</p>
      </div>
    </>
  )
}

export default App
