import classes from '../styles/quote.module.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function OrderDetails() {
    const [searchParams, setSearchParams] = useSearchParams();

    const myParam = searchParams.get('orderid');

    //setSearchParams({ myParam: 'myValue' });

    const [quotes, setQuotes] = useState();

    useEffect(() => {
        populateQuoteData();
    }, []);

    return (
        <div className={`${classes.orderdetailscontent}`} >
            <p>Details about a users order will show here.</p>
            <p>Your order id: {myParam}</p>
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

export default OrderDetails;