import './App.css';
import Table from "./Table";
import Form from "./Form";
import { useState } from "react";

// Данные клиентов прямо в компоненте
const initialClients = [
  { id: 1, name: "Ben", surname: "Blocker", phone: "+123(45)1234567" },
  { id: 2, name: "Alice", surname: "Smith", phone: "+123(45)2345678" },
  { id: 3, name: "John", surname: "Doe", phone: "+123(45)3456789" }
];

function App() {
  const [clients, setClients] = useState(initialClients);

  const delCli = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const addClient = (client) => {
    const newClient = {
      ...client,
      id: Math.max(...clients.map(c => c.id)) + 1
    };
    setClients([...clients, newClient]);
  }

  return (
    <div className="App">
      <Form handleSubmit={addClient} inClient={{name: "", surname: "", phone: ""}}/>
      <Table clients={clients} delClient={delCli} />
    </div>
  );
}

export default App;