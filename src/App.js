import './App.css';
import Table from "./Table";
import Form from "./Form";
import ClientCard from "./Card";
import { useState } from "react";
import { Button, Box } from "@mui/material";

const initialClients = [
  { id: 1, firstName: "Брайан", lastName: "Крэнстон", email: "walter.white@email.com" },
  { id: 2, firstName: "Аарон", lastName: "Пол", email: "jesse.pinkman@email.com" },
  { id: 3, firstName: "Анна", lastName: "Ганн", email: "skyler.white@email.com" },
  { id: 4, firstName: "Дин", lastName: "Норрис", email: "hank.schrader@email.com" }
];

function App() {
  const [clients, setClients] = useState(initialClients);
  const [viewMode, setViewMode] = useState('table');
  const [editingClient, setEditingClient] = useState(null);

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

  return (
    <div className="App">
      <h1>Актеры Breaking Bad</h1>
      
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
}

export default App;