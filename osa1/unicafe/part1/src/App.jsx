import { useState } from 'react'

const calculateAverage = (good, neutral, bad) => {
  return (good - bad) / (good + neutral + bad);
}
const calculatePositive = (good, neutral, bad) => {
  const total = good + neutral + bad;
  return (100*good) / total;
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average {calculateAverage(good, neutral, bad)}</p>
      <p>Positive {calculatePositive(good, neutral, bad)}</p>
    </div>
  )
}

export default App