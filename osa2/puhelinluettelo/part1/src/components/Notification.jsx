const notificationColors = {
    error: 'red',
    success: 'green',
    warning: 'yellow'
};

const notificationStyles = {
    error: {
        backgroundColor: 'red',
        color: 'white'
    },
    success: {
        backgroundColor: 'green',
        color: 'white'
    },
    warning: {
        backgroundColor: 'yellow',
        color: 'black'
    }
};

const Notification = ({message, type}) => {
    if(message === null) {
        return null;
    }
    if(notificationColors[type] === undefined) {
        return null;
    }

    return (
        <div className={type} style={notificationStyles[type]}>
            <h3>{type}</h3>
            <p>{message}</p>
        </div>
    );
}

export default Notification;