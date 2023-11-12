import Part from './Part';
const Content = ({content}) => {
    return (
        <div>
            {content.map((item, index) => (
                <Part key={index} part={item.part} toDo={item.exercise}/>
            ))}
        </div>
    );
}

export default Content;