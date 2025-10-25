import React from "react";
import { useState } from "react";
import { Button, Box, TextField } from "@mui/material";

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
        <TextField
          fullWidth
          label="Имя"
          name="firstName"
          value={client.firstName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Фамилия"
          name="lastName"
          value={client.lastName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Электронная почта"
          type="email"
          name="email"
          value={client.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Box sx={{ marginTop: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            {onCancel ? "Обновить" : "Добавить пользователя"}
          </Button>
          {onCancel && (
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={handleCancel}
              sx={{ marginLeft: 1 }}
            >
              Отмена
            </Button>
          )}
        </Box>
      </Box>
    );
  };
  
  export default Form;