import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { connect } from 'react-redux';
import { deleteClient } from './redux/actions/ClientActions';

const ClientCard = ({ client, deleteClient, onEdit }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {client.firstName} {client.lastName}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          <strong>Email:</strong> {client.email}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          <strong>ID:</strong> {client.id}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="small"
            onClick={() => onEdit(client)}
          >
            Edit
          </Button>
          <Button 
            variant="contained" 
            color="error" 
            size="small"
            onClick={() => deleteClient(client.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const mapDispatchToProps = {
  deleteClient
};

export default connect(null, mapDispatchToProps)(ClientCard);