import React from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

export const TaskWrapper = () => {
    const [tasks, setTasks] = React.useState([]);

    const createTask = async (task) => {
        try {
            const response = await fetch('http://localhost:8080/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if (!response.ok) {
                throw new Error('Falha ao criar tarefa');
            }

            const newTask = await response.json();

            setTasks([...tasks, newTask]);

        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div className='TaskWrapper'>
            <h1>Lista de Tarefas</h1>
            <TaskForm createTask={createTask} />
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskWrapper;