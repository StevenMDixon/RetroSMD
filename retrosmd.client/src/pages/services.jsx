import classes from '../styles/services.module.css';
import DMG from '../assets/DMG.jpg';
import Famicom from '../assets/FAMICOM.jpg';
import PS1 from '../assets/PS1_2.jpg';

function Services() {
    return (
        <div className={classes.ServicesContent} >
            

            <div className={`${classes.ServiceCard} ${classes.RepairCard}`} >
                <div className={classes.ServiceCardContent}>
                    <p className={classes.ServiceCardTitle}>Consoles and Cartridges Repair</p>
                    <p className={classes.ServiceCardText}>Got a beloved console or catridge that doesn't work anymore, or a mod gone wrong?</p>
                    <p>We can repair those</p>
                    <p>Consoles:</p>
                    <div className={classes.Consoles} >
                        <ul>
                            <li>Gameboy (GB, GBC, GBA, Micro)</li>
                            <li>NES</li>
                            <li>SNES</li>
                            <li>N64</li>
                        </ul>
                        <ul>
                            <li>GameCube</li>
                            <li>DS (Phat, Lite, 2DS, 3DS, LL, XL)</li>
                            <li>XBOX</li>
                            <li>SEGA (MegaDrive, Genisis, GameGear)</li>
                        </ul>
                        <ul>
                            <li>PlayStation</li>
                            <li>PlayStation 2</li>
                            <li>PSP</li>
                            <li>PSVita</li>
                        </ul>
                        
                    </div>
                    <div>
                        <p>Trace repairs</p>
                        <p>Component level repairs</p>
                    </div>
                </div>
                <div className={classes.ServiceCardImage}>
                    <img src={`${DMG}`}></img>
                </div>
            </div>

            <div className={`${classes.ServiceCard} ${classes.ModCard}`} >
                <div className={classes.ServiceCardContent}>
                    <p className={classes.ServiceCardTitle} >Mod Installation</p>
                    <p className={classes.ServiceCardText}>We offer a wide range of mod kits that we will install. If you don't see the kit/console you are looking for please reach out to us</p>
                </div>
                <div className={classes.ServiceCardImage}>
                    <img src={`${Famicom}`}></img>
                </div>
            </div>
            <div className={`${classes.ServiceCard} ${classes.ModCard}`} >
                <div className={classes.ServiceCardContent}>
                    <p className={classes.ServiceCardTitle} >Console Shell Swaps</p>
                    <p className={classes.ServiceCardText}>Is that old console looking a little beat up?</p>
                    <p className={classes.ServiceCardText}>We can change out that old case for a new one!</p>
                </div>
                <div className={classes.ServiceCardImage}>
                    <img src={`${ PS1 }`}></img>
                </div>
            </div>
        </div>
    );
}

export default Services;