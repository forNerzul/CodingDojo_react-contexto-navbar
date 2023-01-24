import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Form = () => {
    const {data, setData} = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(e.target.name.value);
        console.log(`Esto es del target ${e.target.name.value}`);
        console.log(`Esto es del data ${data}`);

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name">Your Name: </label>
                <input type="text" id="name" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default Form;