import classes from '../styles/layout.module.css';
import Services from '../modules/services';
import ServiceableConsoles from '../modules/consoles';
import About from '../modules/about';
import SocialMedia from '../modules/socialmedia';
import Deals from '../modules/deals';

function Main() {
    return (
        <div className={`${classes.Content}`} >
            <About></About>
            <Services></Services>
            <ServiceableConsoles></ServiceableConsoles>
            <Deals></Deals>
            <SocialMedia></SocialMedia>
        </div>
    );
}

export default Main;