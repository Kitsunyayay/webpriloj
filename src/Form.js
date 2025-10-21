import React from "react";
import { useState } from "react";

const Form = ({ handleSubmit, inClient }) => {
    const [client, setClient] = useState(inClient);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setClient({ ...client, [name]: value });
    };
  
    const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(client);
      setClient(inClient);
    };
  
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          value={client.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          name="lastName"
          value={client.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={client.email}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    );
  };
  
  export default Form;