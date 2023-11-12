import StatisticLine from "./StatisticLine";

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
        <table>
            <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="All" value={good + neutral + bad}/>
                <StatisticLine text="Average" value={calculateAverage(good, neutral, bad)}/>
                <StatisticLine text="Positive" value={calculatePositive(good, neutral, bad) + '%'}/>
            </tbody>
        </table>
        );
    }
    return (
        <p>No feedback given</p>
    );
}

export default Statistics;