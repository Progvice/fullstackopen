import Part from './Part';
const Content = ({content}) => {
    return (
        <div>
            {content.map((item, index) => (
                <Part key={index} part={item.name} toDo={item.exercises}/>
            ))}
        </div>
    );
}

export default Content;