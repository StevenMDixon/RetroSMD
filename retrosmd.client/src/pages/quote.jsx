import { useEffect, useState } from 'react';
import classes from '../styles/quote.module.css';

function Quote() {
    const [quotes, setQuotes] = useState();

    useEffect(() => {
        populateQuoteData();
    }, []);

    const contents = quotes === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <p></p>

    return (
        <div className={`${classes.quotecontent}`}>
            <h1 id="tableLabel">Quotes</h1>
            <p>This component demonstrates fetching data from a database.</p>
            {contents}
        </div>
    );

    async function populateQuoteData() {
        const response = await fetch('/quotes');
        if (response.status == 200) {
            const data = await response.json();
            console.log(data);
            setQuotes(data);
        }
    }
}

export default Quote;