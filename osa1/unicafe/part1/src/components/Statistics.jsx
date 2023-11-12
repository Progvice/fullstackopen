
const calculateAverage = (good, neutral, bad) => {
    return (good - bad) / (good + neutral + bad);
}
  const calculatePositive = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return (100*good) / total;
}
const Statistics = (props) => {
    const good = props.good;
    const neutral = props.neutral;
    const bad = props.bad;

    if(good !== 0 || neutral !== 0 || bad !== 0) {
        return (
        <>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>All {good + neutral + bad}</p>
          <p>Average {calculateAverage(good, neutral, bad)}</p>
          <p>Positive {calculatePositive(good, neutral, bad)} %</p>
        </>
        );
    }
    return (
        <p>No feedback given</p>
    );
}

export default Statistics;