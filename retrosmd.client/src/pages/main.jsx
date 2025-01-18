import classes from '../styles/services.module.css';
import Services from '../modules/services';
import ServiceableConsoles from '../modules/servicibleconsoles';
import About from '../modules/about';
import SocialMedia from '../modules/socialmedia';
import Footer from '../modules/footer';

function Main() {
    return (
        <div className={`${classes.Content}`} >
            <About></About>
            <Services></Services>
            <ServiceableConsoles></ServiceableConsoles>
            <SocialMedia></SocialMedia>
            <Footer></Footer>
        </div>
    );
}

export default Main;