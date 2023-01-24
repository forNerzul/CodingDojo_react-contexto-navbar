import React, { useState } from "react";
import { DataContext } from "../context/DataContext";


const Wrapper = ({ children }) => {

    const [data , setData] = useState('');
    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    );
}

export default Wrapper;