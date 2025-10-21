import React from "react";
import { useState } from "react";
import { Button, Box } from "@mui/material";

const Form = ({ handleSubmit, inClient, onCancel }) => {
    const [client, setClient] = useState(inClient);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setClient({ ...client, [name]: value });
    };
  
    const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(client);
      setClient({firstName: "", lastName: "", email: ""});
    };

    const handleCancel = () => {
      setClient({firstName: "", lastName: "", email: ""});
      if (onCancel) onCancel();
    };
  
    return (
      <Box component="form" onSubmit={onSubmit} sx={{ marginBottom: 3 }}>
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
        <Box sx={{ marginTop: 1 }}>
          <Button type="submit" variant="contained" color="primary">
            {onCancel ? "Update" : "Add User"}
          </Button>
          {onCancel && (
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={handleCancel}
              sx={{ marginLeft: 1 }}
            >
              Cancel
            </Button>
          )}
        </Box>
      </Box>
    );
  };
  
  export default Form;