import classes from '../styles/layout.module.css';
import Services from '../modules/main/services';
import ServiceableConsoles from '../modules/main/consoles';
import About from '../modules/main/about';
import SocialMedia from '../modules/main/socialmedia';
import Deals from '../modules/main/deals';

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