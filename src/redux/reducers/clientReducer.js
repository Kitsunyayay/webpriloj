import { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT, SET_CLIENTS } from '../actions/ActionTypes';

const initialState = {
  clients: [
    { id: 1, firstName: "Брайан", lastName: "Крэнстон", email: "walter.white@email.com" },
    { id: 2, firstName: "Аарон", lastName: "Пол", email: "jesse.pinkman@email.com" },
    { id: 3, firstName: "Анна", lastName: "Ганн", email: "skyler.white@email.com" },
    { id: 4, firstName: "Дин", lastName: "Норрис", email: "hank.schrader@email.com" }
  ]
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      };
    
    case DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(client => client.id !== action.payload)
      };
    
    case UPDATE_CLIENT:
      return {
        ...state,
        clients: state.clients.map(client => 
          client.id === action.payload.id ? action.payload : client
        )
      };
    
    case SET_CLIENTS:
      return {
        ...state,
        clients: action.payload
      };
    
    default:
      return state;
  }
};

export default clientReducer;