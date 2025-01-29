import React from 'react';

export const TaskForm = ({ createTask }) => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, description, status });

        setTitle('');
        setDescription('');
        setStatus('');
    }

    return (
        <form className='TaskForm' onSubmit={handleSubmit}>
            <input type='text' className='task-input' value={title} placeholder='Nome da Tarefa' onChange={(e) => setTitle(e.target.value)} />
            <input type='text' className='task-input' value={description} placeholder='Descrição da Tarefa' onChange={(e) => setDescription(e.target.value)} />
            <select className='task-input-select' value={status} onChange={(e) => setStatus(e.target.value)} >
                <option value=''>Status da Tarefa</option>
                <option value='NOT_STARTED'>Não Iniciada</option>
                <option value='IN_PROGRESS'>Em Andamento</option>
                <option value='COMPLETED'>Concluída</option>
            </select>
            <button type='submit' className='task-btn'>Adicionar Tarefa</button>
        </form>
    );
};

export default TaskForm;