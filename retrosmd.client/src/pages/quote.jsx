import classes from '../styles/quote.module.css';
import { useEffect, useState } from 'react';

function Quote() {

    return (
        <div className={`${classes.quoteBody}`}>
            <p className={`${classes.quoteBodyHeader}`}><i className='bx bx-error-alt bx-burst'></i> This section is still under construction! <i className='bx bx-error-alt bx-burst'></i></p>

            <p>If you would like a quote please email us at <a href="Mailto:Support@RetroSMD.com">Support@RetroSMD.com</a></p>

            <p>Please include information about your device and if you are in need of a repair or just want a mod installed. We will reach back out quickly and follow up with you!</p>
            <a href="https://m.me/587891887741020" target="_blank">DM us on facebook</a>

            <p>PLEASE NOTE: Upgrading/Installation Services typically take between 1-4 weeks from the time the console is received until it ships back out.  Please keep in mind that this is just an estimate and it can sometimes go over by a week or 2 during busy times.  </p>
        </div>
    );

    //async function populateServices() {
    //    const response = await fetch('services');
    //    if (response.ok) {
    //        const data = await response.json();
    //        console.log(data)
    //        setServices(data);
    //    }
    //}

    //async function populateConsoles() {
    //    const response = await fetch('consoles');
    //    if (response.ok) {
    //        const data = await response.json();
    //        setConsoles(data);
    //    }
    //}
}

export default Quote;