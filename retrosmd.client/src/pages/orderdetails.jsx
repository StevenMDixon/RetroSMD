import classes from '../styles/orderdetails.module.css';
import { useSearchParams } from 'react-router-dom';
function OrderDetails() {
    const [searchParams, setSearchParams] = useSearchParams();

    const myParam = searchParams.get('orderid');

    //setSearchParams({ myParam: 'myValue' });

    return (
        <div className={`${classes.orderdetailscontent}`} >
            <p>Details about a users order will show here.</p>
            <p>Your order id: {myParam}</p>
        </div>
    );
}

export default OrderDetails;