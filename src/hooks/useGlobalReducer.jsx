// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.
import {getAllCharacters} from "../services/starWars"
import { getAllPlanets } from "../services/planetWars";
import { useActionData } from "react-router-dom";

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())

    const fetchPeople = async ()=>{
            try {
                const data = await getAllCharacters()
                dispatch({
                    type: "SET_PEOPLE",
                    payload: data
                })
            } catch (error) {
                console.log(error)
            }
    }
    const fetchPlanets = async () => {
        try {
            const dataPlanet = await getAllPlanets()
            dispatch({
                type: "SET_PLANETS",
                payload: dataPlanet
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchPeople()
        fetchPlanets()
    }, [])




    // Provide the store and dispatch method to all child components.
    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}