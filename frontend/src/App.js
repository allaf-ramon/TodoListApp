import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TaskWrapper from './components/TaskWrapper';
import TaskDetails from './components/TaskDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskWrapper />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default App;