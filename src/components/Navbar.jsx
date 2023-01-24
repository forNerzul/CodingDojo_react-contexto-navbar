import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Navbar = () => {
const { data } = useContext(DataContext);
    return (
        <nav className="navbar">
            <h2>Hi {data}!</h2>
        </nav>
    );
}
export default Navbar;