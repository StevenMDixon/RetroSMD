import classes from '../styles/services.module.css';

function Services() {
    return (
        <div className={`${classes.servicescontent}`} >
            <div>
                <p>Modding Services</p>
                <ul>
                    <li>Mod Installs</li>
                </ul>
            </div>
            <div>
                <p>Repair Services</p>
                <ul>
                    <li>General Electronics</li>
                    <li>Game Consoles & Cartridges</li>
                    <li>Trace repair</li>
                    <li>Components Level Repair</li>
                </ul>
            </div>
            <div>
                <p>Electronic Recycling</p>
                <p>If you have any older tech that is laying around gathering dust we will take it!</p>
            </div>

        </div>
    );
}

export default Services;