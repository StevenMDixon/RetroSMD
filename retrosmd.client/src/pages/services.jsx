import classes from '../styles/layout.module.css';
import sClasses from '../styles/services.module.css';
import { Link } from 'react-router-dom';
function Services() {
    return (
        <div className={sClasses.ServiceContainer} >
            <p className={`${classes.SectionTitle}`}>Services</p>
            <div className={sClasses.ServiceWrapper}>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`} >Cartridge Repairs</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>We cover a wide range of repairs including but not limited to:</p>
                    <ul>
                        <li>Battery replacements</li>
                        <li>Board swaps</li>
                        <li>Trace repairs</li>
                        <li>Corrosion</li>
                        <li>And more....</li>
                    </ul>
                </div>
            </div>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`}>Console Repairs</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>We cover a wide range of repairs including but not limited to:</p>
                    <ul>
                        <li>Disc drives not reading</li>
                        <li>Broken or not working screens</li>
                        <li>Broken or damaged ports</li>
                        <li>Bad Capacitors</li>
                        <li>Broken shells/cases</li>
                        <li>Controllers not working</li>
                        <li>And more....</li>
                    </ul>
                </div>
            </div>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`}>Mod Installation</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>We have expierence installing all types of mods!</p>
                    <ul>
                        <li>IPS screens</li>
                        <li>HDMI output kits</li>
                        <li>Silent fan installations</li>
                        <li>Region free kits</li>
                        <li>USB-C ports</li>
                        <li>ODEs, RGB kits, and more!</li>
                    </ul>
                </div>
            </div>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`}>Reshelling/Case Swapping</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>Nothing wrong with adding a little flare to your favorite console!</p>
                    <p>We can professionally install any new case our shell for consoles and controllers.</p>                   
                </div>
            </div>
            <div className={`${sClasses.ServiceSection}`}>
                <p className={`${classes.SectionSubTitle}`}>3D Printing</p>
                    <div className={`${sClasses.ServiceContent}`}>
                    <p>Need a mod 3d printed? We got that covered too!</p>
                    <p>We offer a great rate on getting parts for mods 3d printed</p>
                    <p>Just send us what you want printed and in what material and we will get back to you with a price!</p>
                    <p>Any mods or repairs that use 3d prints will have the cost included in the repair.</p>
                </div>
                </div>
                
            </div>
            <Link className={`${sClasses.QuoteButton}`} to="/Quote">GET A QUOTE<i className='bx bx-right-arrow-alt'></i></Link>
        </div>
    )
}

export default Services;

//Cartridge Repair
//Console Repair
//Mod Installation
//Reshelling/Shell swapping
//3D Printing