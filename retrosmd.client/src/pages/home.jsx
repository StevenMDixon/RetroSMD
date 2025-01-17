import { Link } from "react-router-dom";
import classes from "../styles/home.module.css";

function Home() {
    return (
        <div className={ `${classes.homecontent}`} >
            <p>The home page.</p>
        </div>
    );
}

export default Home;