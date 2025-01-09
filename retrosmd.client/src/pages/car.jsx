import { useEffect, useState } from 'react';
import '../App.css';

function Forecast() {
    const [quotes, setQuotes] = useState();

    useEffect(() => {
        populateCarData();
    }, []);

    const contents = quotes === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>brand</th>
                    <th>model</th>
                    <th>year</th>
                </tr>
            </thead>
            <tbody>
                {quotes.map(quote =>
                    <tr key={quote.quoteid}>
                        <td>{quote.brand}</td>
                        <td>{quote.model}</td>
                        <td>{quote.year}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Cars</h1>
            <p>This component demonstrates fetching data from a database.</p>
            {contents}
        </div>
    );

    async function populateCarData() {
        const response = await fetch('/quote');
        if (response.status == 200) {
            const data = await response.json();
            setQuotes(data);
        }
    }
}

export default Forecast;