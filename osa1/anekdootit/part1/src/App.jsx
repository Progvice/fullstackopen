import {useState} from 'react';
import './App.css'
import anecdotes from './consts/Anecdotes';

const findBiggestValue = (list) => {
  let maxValue = Math.max(...list);
  let i = list.indexOf(maxValue);
  return i;
}

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
    <h1>Anecdote of the day</h1>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>Random anecdotes</button>
      <div>
        {anecdotes[selected]}
        <button onClick={() => {
          let updatedList = [...scoreList];
          updatedList[selected] = updatedList[selected] + 1;
          setScoreList(updatedList);
        }}>Vote</button>
        <p>Has {scoreList[selected]} votes</p>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[findBiggestValue(scoreList)]}</p>
        <p>Has {scoreList[findBiggestValue(scoreList)]} votes</p>
      </div>
    </>
  )
}

export default App
