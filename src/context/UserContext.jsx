import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [ usuario, setUsuario ] = useState({})
    useEffect(()=> {
        // setUsuario({
        //     name: "Felix Melendez",
        //     registered: "18/Septiembre/2022"
        // })
        setUsuario({
            name: localStorage.getItem("name") || "no name",
            registered: localStorage.getItem("registered") || "no date"
        })
    },[])


    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }