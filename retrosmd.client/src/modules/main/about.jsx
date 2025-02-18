import classes from '../../styles/layout.module.css'; 
import { Link } from 'react-router-dom';
function About() {
    return (
        <div className={classes.Section} >
            <p className={classes.SectionTitle} >RETROSMD</p>
            <div className={classes.About}>
                <p>RETROSMD is a premier console modification and repair service located in Norcross, GA. Our mission is to prevent electronic waste by reviving and repurposing retro technology.</p>
                <p>We offer a comprehensive range of repair and modification services on classic gaming consoles and games. We will work with you to get your favorite consoles and games working like new or better! </p>
                <p>Have a questions? Check out our <Link to="./Faq">FAQ</Link></p>
            </div>
        </div>
    )};
export default About;