# Todo List App

Um aplicativo full-stack de lista de tarefas construído com Spring Boot e React. O projeto utiliza Docker para containerização e PostgreSQL como banco de dados.

## 🖼️ Preview do Aplicativo

### Tela Principal - Lista e Cadastro de Tarefas
![Tela principal mostrando lista de tarefas e formulário de cadastro](https://github.com/user-attachments/assets/4caf2ee3-3e0f-46c6-817e-5d9e3d6cb82c)

### Tela de Detalhes da Tarefa
![Tela de detalhes mostrando informações específicas de uma tarefa](https://github.com/user-attachments/assets/c57ff4c5-d34a-4997-af9a-be609575fe4e)


## 🚀 Tecnologias

- **Backend:**
    - Java 21
    - Spring Boot 3.4.2
    - Spring Data JPA
    - PostgreSQL
    - Maven

- **Frontend:**
    - React 19
    - React Router DOM 7
    - CSS3
    - Nginx (produção)

- **DevOps:**
    - Docker
    - Docker Compose

## 📋 Requisitos

- Docker e Docker Compose
- Java 21 (para desenvolvimento)
- Node.js (para desenvolvimento)

## 🛠️ Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/allaf-ramon/TodoListApp.git
cd TodoListApp
```

2. Inicie os containers com Docker Compose:
```bash
docker-compose up -d
```

A aplicação estará disponível em:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Banco de dados: localhost:5432

## 🔌 API Endpoints

### Tasks

#### GET /api/tasks
- **Descrição**: Retorna todas as tarefas

#### GET /api/tasks/{id}
- **Descrição**: Retorna uma tarefa específica
- **Parâmetros**: id (Long)

#### POST /api/tasks
- **Descrição**: Cria uma nova tarefa
- **Corpo**:
```json
{
    "title": "Nova Tarefa",
    "description": "Descrição da nova tarefa",
    "status": "NOT_STARTED"
}
```

## 📝 Status dos Dados

As tarefas podem ter os seguintes status:
- `NOT_STARTED`: Não iniciada
- `IN_PROGRESS`: Em andamento
- `COMPLETED`: Concluída

## 🏗️ Estrutura do Projeto

```
TodoListApp/
├── backend/                # Aplicação Spring Boot
│   ├── src/
│   ├── Dockerfile
│   └── pom.xml
├── frontend/              # Aplicação React
│   ├── src/
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml     # Configuração Docker Compose
```

## 👨‍💻 Desenvolvimento

Para desenvolvimento local:

1. Backend:
```bash
cd backend
./mvnw spring-boot:run
```

2. Frontend:
```bash
cd frontend
npm install
npm start
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença MIT.
