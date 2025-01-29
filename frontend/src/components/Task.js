import React from 'react';

export const Task = ({ task }) => {
    return (
        <div className='Task'>
            <p>{task.title}</p>
        </div>
    );
};

export default Task;