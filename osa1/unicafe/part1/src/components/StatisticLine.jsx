const StatisticLine = (props) => {
    const text = props.text;
    const value = props.value;
    return (
        <p>{text}: {value}</p>
    );
}

export default StatisticLine;