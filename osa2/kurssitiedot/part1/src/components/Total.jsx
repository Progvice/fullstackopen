const Total = ({exercises}) => {
    let totalExercises = 0;
    exercises.forEach(exercise => {
        totalExercises = totalExercises + exercise.exercises;
    });
    return (
        <p>Number of exercises {totalExercises}</p>
    );
}

export default Total;