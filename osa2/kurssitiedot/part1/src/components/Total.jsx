const Total = ({exercises}) => {
    const totalExercises = exercises.reduce((accumulator, exercise) => {
        return accumulator + exercise.exercises;
      }, 0);
    return (
        <p>Number of exercises {totalExercises}</p>
    );
}

export default Total;