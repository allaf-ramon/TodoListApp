import React from 'react';

export const Task = ({ task }) => {
    return (
        <div className='Task'>
            <h3>{task.title}</h3>
        </div>
    );
};

export default Task;