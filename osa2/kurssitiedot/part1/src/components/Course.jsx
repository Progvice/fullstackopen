import Header from './Header';
import Content from './Content';
import Total from './Total';
const Course = (props) => {
    const course = props.course;
    return (
    <>
        <Header courseName={course.name}/>
        <Content content={course.parts}/>
        <Total exercises={course.parts}/>
    </>
    );
}

export default Course;