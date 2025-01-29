import React from 'react';
import { Link } from 'react-router-dom';

export const Task = ({ task }) => {
    return (
        <Link to={`/tasks/${task.id}`} className="task-link">
            <div className='Task'>
                <h3>{task.title}</h3>
            </div>
        </Link>
    );
};

export default Task;