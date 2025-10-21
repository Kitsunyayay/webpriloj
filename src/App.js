import './App.css';
import Table from "./Table";
import Form from "./Form";
import ClientCard from "./Card";
import Login from "./Login";
import { useState } from "react";
import { Button, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const initialClients = [
  { id: 1, firstName: "Брайан", lastName: "Крэнстон", email: "walter.white@email.com" },
  { id: 2, firstName: "Аарон", lastName: "Пол", email: "jesse.pinkman@email.com" },
  { id: 3, firstName: "Анна", lastName: "Ганн", email: "skyler.white@email.com" },
  { id: 4, firstName: "Дин", lastName: "Норрис", email: "hank.schrader@email.com" }
];

const users = [
  { email: "admin@test.com", password: "123456" },
  { email: "user@test.com", password: "password" }
];

function App() {
  const [clients, setClients] = useState(initialClients);
  const [viewMode, setViewMode] = useState('table');
  const [editingClient, setEditingClient] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const delCli = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const addClient = (client) => {
    if (editingClient) {
      setClients(clients.map(c => c.id === editingClient.id ? { ...client, id: editingClient.id } : c));
      setEditingClient(null);
    } else {
      const newClient = {
        ...client,
        id: Math.max(...clients.map(c => c.id)) + 1
      };
      setClients([...clients, newClient]);
    }
  };

  const handleEdit = (client) => {
    setEditingClient(client);
  };

  const cancelEdit = () => {
    setEditingClient(null);
  };

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser({ email });
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const MainApp = () => (
    <div className="App">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <h1>Актеры Breaking Bad</h1>
        {currentUser && (
          <Button variant="outlined" onClick={handleLogout}>
            Выйти ({currentUser.email})
          </Button>
        )}
      </Box>
      
      <Box sx={{ marginBottom: 2 }}>
        <Button 
          variant={viewMode === 'table' ? "contained" : "outlined"}
          onClick={() => setViewMode('table')}
          sx={{ marginRight: 1 }}
        >
          Таблица
        </Button>
        <Button 
          variant={viewMode === 'cards' ? "contained" : "outlined"}
          onClick={() => setViewMode('cards')}
        >
          Карточки
        </Button>
      </Box>

      <Form 
        handleSubmit={addClient} 
        inClient={editingClient || {firstName: "", lastName: "", email: ""}}
        onCancel={editingClient ? cancelEdit : null}
      />
      
      {viewMode === 'table' ? (
        <Table clients={clients} delClient={delCli} onEdit={handleEdit} />
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {clients.map(client => (
            <ClientCard 
              key={client.id} 
              client={client} 
              delClient={delCli} 
              onEdit={handleEdit}
            />
          ))}
        </Box>
      )}
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            currentUser ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/" 
          element={
            currentUser ? <MainApp /> : <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;