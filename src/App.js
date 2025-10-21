import './App.css';
import Table from "./Table";
import Form from "./Form";
import { useState } from "react";

//FirstName, LastName, Email
const initialClients = [
  { id: 1, firstName: "Брайан", lastName: "Крэнстон", email: "walter.white@email.com" },
  { id: 2, firstName: "Аарон", lastName: "Пол", email: "jesse.pinkman@email.com" },
  { id: 3, firstName: "Анна", lastName: "Ганн", email: "skyler.white@email.com" },
  { id: 4, firstName: "Дин", lastName: "Норрис", email: "hank.schrader@email.com" }
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
      <h1>Users</h1>
      <Form handleSubmit={addClient} inClient={{firstName: "", lastName: "", email: ""}}/>
      <Table clients={clients} delClient={delCli} />
    </div>
  );
}

export default App;