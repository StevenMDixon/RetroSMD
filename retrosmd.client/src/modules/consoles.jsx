import classes from '../styles/layout.module.css';
import sClasses from '../styles/components/consoles.module.css';


function ServiceableConsoles() {
    return (
        <div className={`${classes.Section} styled-bg ${sClasses.ConsoleSection}`} >
                <div>
                    <p className={classes.SectionTitle}>Consoles We Service</p>
                </div>
                <div className={`${sClasses.Consoles}`} >
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
            <p className={`${sClasses.TextCenter}`} >And more!</p>
            </div>
    )
}

export default ServiceableConsoles;