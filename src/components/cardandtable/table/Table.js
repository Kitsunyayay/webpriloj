import { Table, TableContainer, Button, TableBody, TableRow, TableHead, Paper, TableCell } from "@mui/material";
import React from "react";
import { connect } from 'react-redux';
import { deleteClient } from './redux/actions/ClientActions';

const ClientTable = ({ clients, deleteClient, onEdit }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow 
              key={client.id}
              sx={{ 
                backgroundColor: index % 2 === 0 ? '#f8f8f8' : '#ffffff',
                '&:hover': { backgroundColor: '#e3f2fd' }
              }}
            >
              <TableCell>{client.id}</TableCell>
              <TableCell>{client.firstName}</TableCell>
              <TableCell>{client.lastName}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>
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
                  onClick={() => deleteClient(client.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapDispatchToProps = {
  deleteClient
};

export default connect(null, mapDispatchToProps)(ClientTable);