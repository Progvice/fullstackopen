const Total = ({exercises}) => {
    const totalValue = exercises.reduce((accumulator, currentvalue) => {
        return accumulator + currentvalue;
    }, 0);
    return (
        <p>Number of exercises {totalValue}</p>
    );
}

export default Total;