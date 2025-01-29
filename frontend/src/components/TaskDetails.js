import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const TaskDetails = () => {
    const { id } = useParams();
    const [task, setTask] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const fetchTaskDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/tasks/${id}`);
                if (!response.ok) throw new Error('Tarefa não encontrada');
                const data = await response.json();
                setTask(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTaskDetails();
    }, [id]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;
    if (!task) return <div>Tarefa não encontrada</div>;

    return (
        <div className='TaskWrapper'>
            <h1>Detalhes da Tarefa</h1>
            <Link to="/" className="task-link">
                <p className='btn-back'>Voltar para Lista</p>
            </Link>
            <form className='TaskForm'>
                <input type='text' className='task-input' value={task.title} placeholder='Nome da Tarefa' disabled />
                <input type='text' className='task-input' value={task.description} placeholder='Descrição da Tarefa' disabled />
                <select className='task-input-select' value={task.status} disabled >
                    <option value=''>Status da Tarefa</option>
                    <option value='NOT_STARTED'>Não Iniciada</option>
                    <option value='IN_PROGRESS'>Em Andamento</option>
                    <option value='COMPLETED'>Concluída</option>
                </select>
                <div className='task-btn-group'>
                    <button className='task-btn' disabled >Editar</button>
                    <button className='task-btn btn-remove' disabled>Excluir</button>
                </div>
            </form>
        </div>

    );
};

export default TaskDetails;