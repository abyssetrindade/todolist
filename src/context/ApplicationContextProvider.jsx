import React, { useReducer, useState } from "react";
import { createContext } from "react";
import { ApplicationReducer } from "./ApplicationReducer";


export const ApplicationContext = createContext({});


function ApplicationContextProvider({ children }) {
    const [state, dispatch] = useReducer(ApplicationReducer, {tasks: [], basket: []});

    const addToBasket = (data) => {
        dispatch({ type: "ADD_TO_BASKET", data })
    }

    const updateTasks = (task) => {
        dispatch({ type: "SET_TASKS", data: task })
    }

    const addUsers = (user) => {
        dispatch({ type: "ADD_USER", data: user })
    }

    return (
        <ApplicationContext.Provider value={{ state, addToBasket, updateTasks, addUsers }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider