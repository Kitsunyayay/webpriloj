import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const ClientCard = ({ client, delClient, onEdit }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {client.firstName} {client.lastName}
        </Typography>
        <Typography color="text.secondary">
          Email: {client.email}
        </Typography>
        <Typography color="text.secondary">
          ID: {client.id}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            onClick={() => onEdit(client)}
            sx={{ marginRight: 1 }}
          >
            Edit
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            size="small"
            onClick={() => delClient(client.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ClientCard;