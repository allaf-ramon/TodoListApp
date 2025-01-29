export const translateStatus = (status) => {
    switch (status) {
        case 'NOT_STARTED':
            return 'Não Iniciada';
        case 'IN_PROGRESS':
            return 'Em Andamento';
        case 'COMPLETED':
            return 'Concluída';
        default:
            return status;
    }
};