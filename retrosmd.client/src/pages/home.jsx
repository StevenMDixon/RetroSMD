import '../App.css';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <p>The home page.</p>
            <Link to={'/Pay'}>Pay</Link>
            <Link to={'/Quote'}>Quotes</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'/Services'}>Services</Link>
        </div>
    );
}

export default Home;