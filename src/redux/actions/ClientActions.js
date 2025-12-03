import { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT, SET_CLIENTS } from './ActionTypes';

export const addClient = (client) => ({
  type: ADD_CLIENT,
  payload: client
});

export const deleteClient = (id) => ({
  type: DELETE_CLIENT,
  payload: id
});

export const updateClient = (client) => ({
  type: UPDATE_CLIENT,
  payload: client
});

export const setClients = (clients) => ({
  type: SET_CLIENTS,
  payload: clients
});