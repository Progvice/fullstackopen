const StatisticLine = (props) => {
    const text = props.text;
    const value = props.value;
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
}

export default StatisticLine;