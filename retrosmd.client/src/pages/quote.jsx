import classes from '../styles/quote.module.css';
import { useEffect, useState } from 'react';

import ModView from '../modules/quote/mod';
import RepairView from '../modules/quote/repair';
import DonateView from '../modules/quote/donate';

function Quote() {
    const [selectedItems, setSelectedItems] = useState(["test"]);
    const [selectedRoute, setSelectedRoute] = useState("repair");

    const displayItems = () => selectedItems.map((x, i) => <li key={i} >{x}</li>)

    const displayRoute = (addfn, list) => {
        switch (selectedRoute) {
            case "repair": return <RepairView addItem={addfn} Items={list} />
            case "mod": return <ModView addItem={addfn} Items={list} />
            case "donation": return <DonateView addItem={addfn} Items={list} />
        }
    }

    const addItemToList = (item) => {
        setSelectedItems([...selectedItems, item])
    }

    const removeItemFromList = (item) => {

    }
    
    return (
        <div className={`${classes._}`}>
            <div>
                <p>I want to:</p>
                <select type="dropdown" value={selectedRoute} onChange={(e) => setSelectedRoute(e.target.value)}>
                    <option value="repair">Get a quote for repair(s)</option>
                    <option value="mod">Get a quote for Mod(s)</option>
                    <option value="donation">Make a donation</option>
                </select>
            </div>

            <div className="Cart Section">
                {displayItems()}
            </div>

            {displayRoute(selectedRoute, addItemToList, setSelectedItems)}
        </div>
    );

    function getItems() { }
}

export default Quote;