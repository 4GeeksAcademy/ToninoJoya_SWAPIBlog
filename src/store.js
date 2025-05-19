export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    favorites: [], 
    urlBase : "https://swapi.tech/api"
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    
    case "SET_PEOPLE":
      return{
        ...store, 
        characters: action.payload
      };

    case "SET_PLANETS":
      return{
        ...store,
        planets: action.payload
      }
    case "SET_FAVORITES":
      return{
        ...store, 
        favorites:  action.payload
      }
    case "DELETE_FAVORITES":
      return{
        ...store,
        favorites: store.favorites.filter((item, index) => index !== action.payload)
      }
    default:
      throw Error('Unknown action.');
  }    
}
