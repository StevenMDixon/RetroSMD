import { Link } from "react-router-dom";
import classes from "../styles/home.module.css";

function Home() {
    return (
        <div className={ `${classes.homecontent}`} >
            <p>The home page.</p>
            <Link to={'/Pay'}>Pay</Link>
            <Link to={'/Quote'}>Quotes</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'/Services'}>Services</Link>
            <Link to={'/Orders'}>Order</Link>
        </div>
    );
}

export default Home;