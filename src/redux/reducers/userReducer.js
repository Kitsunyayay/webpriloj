import { LOGIN_USER, LOGOUT_USER, LOGIN_ERROR, LOGIN_LOADING } from '../actions/ActionTypes';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    
    case LOGOUT_USER:
      return {
        ...initialState
      };

    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case LOGIN_ERROR:
      let errorMessage = "Произошла неизвестная ошибка";
      
      if (action.payload?.status === 401) {
        errorMessage = "Неверный email или пароль";
      } else if (action.payload?.status === 404) {
        errorMessage = "Пользователь не найден";
      } else if (typeof action.payload === 'string') {
        errorMessage = action.payload;
      } else if (action.payload?.message) {
        errorMessage = action.payload.message;
      }
      
      return {
        ...state,
        isLoading: false,
        error: errorMessage,
        currentUser: null,
        isAuthenticated: false
      };
    
    default:
      return state;
  }
};

export default userReducer;