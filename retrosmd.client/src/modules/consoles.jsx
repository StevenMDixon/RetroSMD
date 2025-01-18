import classes from '../styles/services.module.css';
import { Fragment } from 'react';

function ServiceableConsoles() {
    return (
        <Fragment>
            <div className={`${classes.Section} ${classes.ConsoleSection}`} >
                <div>
                    <p className={classes.SectionTitle}>Consoles We Service</p>
                </div>
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
            </div>
        </Fragment>
    )
}

export default ServiceableConsoles;