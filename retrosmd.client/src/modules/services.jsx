import classes from '../styles/layout.module.css';
import sClasses from '../styles/components/services.module.css';
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className={`${classes.Section}`}>
            <div>
                <p className={`${classes.SectionTitle}`}>Our Services</p>
            </div>
            <div className={`${sClasses.Services}`}>
                <div className={`${sClasses.ServicesCard}`} >
                    <div className={`${classes.SectionTitleWrapper}`} >
                        <i className='bx bx-wrench'></i>
                        <p className={`${classes.SectionSubTitle}`} >Cartridge Repair</p>
                    </div>

                    <div className={`${sClasses.ServicesCardContent}`}>
                        <p>Not able to save? Cartridge no longer reading?</p>
                        <p>We can replace batteries or even doing component level replacements!</p>
                    </div>
                </div>
                <div className={`${sClasses.ServicesCard}`}>
                    <div className={`${classes.SectionTitleWrapper}`} >
                        <i className='bx bx-joystick'></i>
                        <p className={`${classes.SectionSubTitle}`}>Console Repair</p>
                    </div>
                    <div className={`${sClasses.ServicesCardContent}`}>
                        <p>Is your favorite retro console no longer working?</p>
                        <p>We can get it back up and running just like you remember!</p>
                    </div>
                </div>
                <div className={`${sClasses.ServicesCard}`}>
                    <div className={`${classes.SectionTitleWrapper}`} >
                        <i className='bx bx-microchip'></i>
                        <p className={`${classes.SectionSubTitle}`}>Mod Installation</p>
                    </div>
                    <div className={`${sClasses.ServicesCardContent}`}>
                        <p>Want to add some new life into your old systems?</p>
                        <p>We can handle all kinds of Mod kit installations. From IPS Screen upgrades to USB-C mods!</p>
                    </div>
                </div>
                <div className={`${sClasses.ServicesCard}`}>
                    <div className={`${classes.SectionTitleWrapper}`} >
                        <i className='bx bx-devices'></i>
                        <p className={`${classes.SectionSubTitle}`}>Reshelling/Shell swapping</p>
                    </div>
                    <div className={`${sClasses.ServicesCardContent}`}>
                        <p>Need to add a little modern drip to your retro systems?</p>
                        <p>We will profesionally install new/replacment shells for most retro games systems!</p>
                    </div>
                </div>
            </div>
            <Link className={`${sClasses.QuoteButton}`} to="/Quote">GET A QUOTE<i className='bx bx-right-arrow-alt'></i></Link>
            </div>
    )
};

export default Services;