import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [quotes, setQuotes] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = quotes === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {quotes.map(quote =>
                    <tr key={quote.brand}>
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
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('GetQuotes');
        const data = await response.json();
        setQuotes(data);
    }
}

export default App;