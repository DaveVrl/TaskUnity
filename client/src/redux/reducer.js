const initialState = {
    // Define cualquier estado inicial que necesites aquí
    todos: [],
    user: null,
    // Otros datos iniciales...
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      // Puedes añadir casos de acción aquí si lo necesitas en el futuro
      default:
        return state;
    }
  };
  
  export default reducer;