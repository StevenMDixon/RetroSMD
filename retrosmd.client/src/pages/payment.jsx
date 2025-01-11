import '../App.css';
import { useSearchParams } from 'react-router-dom';
function Payment() {
    const [searchParams, setSearchParams] = useSearchParams();

    const myParam = searchParams.get('transid');

    //setSearchParams({ myParam: 'myValue' });

    return (
        <div>
            <p>Payments will be made here.</p>
            <p>You need to pay {myParam}</p>
        </div>
    );
}

export default Payment;