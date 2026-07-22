import React, { useState } from 'react';
import '../../styles/admin/AdminTodoList.css';

const AdminTodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Follow up with BK-001 payment',
      description: 'Contact John Doe about pending payment',
      dueDate: '2025-01-25',
      priority: 'High',
      status: 'Pending',
      assignedTo: 'Admin',
    },
    {
      id: 2,
      title: 'Prepare equipment for BK-002',
      description: 'Set up camera and lighting for Maria Santos booking',
      dueDate: '2025-02-19',
      priority: 'High',
      status: 'In Progress',
      assignedTo: 'Photographer',
    },
    {
      id: 3,
      title: 'Edit photos from BK-003',
      description: 'Complete photo editing and send to Robert Carlos',
      dueDate: '2025-02-10',
      priority: 'Medium',
      status: 'In Progress',
      assignedTo: 'Editor',
    },
    {
      id: 4,
      title: 'Send invoice to Ana Cruz',
      description: 'Generate and send invoice for BK-005',
      dueDate: '2025-01-26',
      priority: 'Medium',
      status: 'Completed',
      assignedTo: 'Admin',
    },
    {
      id: 5,
      title: 'Update website portfolio',
      description: 'Add new completed projects to portfolio',
      dueDate: '2025-02-01',
      priority: 'Low',
      status: 'Pending',
      assignedTo: 'Marketing',
    },
  ]);

  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    status: 'Pending',
    assignedTo: 'Admin',
  });

  const [filterStatus, setFilterStatus] = useState('All');

  const filteredTodos = todos.filter((todo) =>
    filterStatus === 'All' ? true : todo.status === filterStatus
  );

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.title.trim()) {
      setTodos([...todos, { ...newTodo, id: Date.now() }]);
      setNewTodo({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium',
        status: 'Pending',
        assignedTo: 'Admin',
      });
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#dc3545';
      case 'Medium':
        return '#ffc107';
      case 'Low':
        return '#28a745';
      default:
        return '#6c757d';
    }
  };

  return (
    <div className="todo-container">
      <h2>Admin To Do List</h2>

      {/* Add New Todo */}
      <div className="add-todo-section">
        <h3>Add New Task</h3>
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            placeholder="Task title..."
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Description (optional)"
            value={newTodo.description}
            onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            rows="2"
          />
          <div className="form-row">
            <input
              type="date"
              value={newTodo.dueDate}
              onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
              required
            />
            <select
              value={newTodo.priority}
              onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <select
              value={newTodo.assignedTo}
              onChange={(e) => setNewTodo({ ...newTodo, assignedTo: e.target.value })}
            >
              <option>Admin</option>
              <option>Photographer</option>
              <option>Videographer</option>
              <option>Editor</option>
              <option>Marketing</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">➕ Add Task</button>
        </form>
      </div>

      {/* Filter */}
      <div className="filter-section">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="status-filter"
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Todo List */}
      <div className="todos-list">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className={`todo-item status-${todo.status.toLowerCase()}`}>
            <div className="todo-left">
              <input
                type="checkbox"
                checked={todo.status === 'Completed'}
                onChange={(e) =>
                  handleStatusChange(todo.id, e.target.checked ? 'Completed' : 'Pending')
                }
              />
              <div className="todo-content">
                <h4 className={todo.status === 'Completed' ? 'completed' : ''}>
                  {todo.title}
                </h4>
                {todo.description && <p>{todo.description}</p>}
                <div className="todo-meta">
                  <span className="date">📅 {todo.dueDate}</span>
                  <span className="assigned">👤 {todo.assignedTo}</span>
                </div>
              </div>
            </div>

            <div className="todo-right">
              <span
                className="priority-badge"
                style={{ backgroundColor: getPriorityColor(todo.priority) }}
              >
                {todo.priority}
              </span>
              <select
                value={todo.status}
                onChange={(e) => handleStatusChange(todo.id, e.target.value)}
                className="status-select"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              <button
                className="btn-delete"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTodos.length === 0 && (
        <div className="no-data">No tasks found for this status</div>
      )}

      {/* Stats */}
      <div className="todo-stats">
        <div className="stat">
          <h4>Total Tasks</h4>
          <p>{todos.length}</p>
        </div>
        <div className="stat">
          <h4>Pending</h4>
          <p>{todos.filter((t) => t.status === 'Pending').length}</p>
        </div>
        <div className="stat">
          <h4>In Progress</h4>
          <p>{todos.filter((t) => t.status === 'In Progress').length}</p>
        </div>
        <div className="stat">
          <h4>Completed</h4>
          <p>{todos.filter((t) => t.status === 'Completed').length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminTodoList;
