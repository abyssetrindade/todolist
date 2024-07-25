import React, { useState } from "react";
import { createContext } from "react";


export const ApplicationContext = createContext({});


function ApplicationContextProvider({ children }) {
    const [state, setState] = useState({ tasks: [], users: [], basket : [] });

    const addToBasket = (item) => {
        setState((currentState) => {
            const newState = { ...currentState, basket: [...currentState.basket, item] }
            return newState;
        })
    }


    const updateTasks = (tasks) => {
        setState((currentState) => {
            const newState = { ...currentState, tasks }
            return newState;
        })
    }

    const addUsers = (user) => {
        setState((currentState) => {
            const newState = { ...currentState, users: [...currentState.users, user] }
            return newState;
        })
    }

    return (
        <ApplicationContext.Provider value={{ state, addToBasket, updateTasks, addUsers }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider