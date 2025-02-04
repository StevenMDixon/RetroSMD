/* eslint-disable react/prop-types */
const TypeSelector = ({ classes,  selectedPlatform, moveToNextStep, setSelectedType}) => {
    return (
        <div className={classes.TypeSelector} > 
            {selectedPlatform != "Donation" && <p>I want to:</p>}
            {selectedPlatform != "Donation" &&
                [{ text: "Install a Mod", value:"Mod"}, { text: "Get a repair", value:"Repair"}].map((type, i) => (
                    <div key={i} onClick={() => moveToNextStep(setSelectedType, type.value)} >
                        <p>{type.text}</p>
                    </div>
                ))
            }
            {selectedPlatform == "Donation" &&
                <div>
                    <p>Awesome! if you just want to make a donation, Reach out to us at <a href="mailto:support@retrosmd.com">Support@RetroSMD.com</a></p>
                    <p>Items we accept:</p>
                    <ul>
                        <li>Game consoles</li>
                        <li>Cartridge based games</li>
                        <li>Controllers (Currently we are only looking for Gamecube controllers, but we will accept these not working)</li>
                    </ul>

                    <p>If you are wanting to get a discount on your order by donating some items fill out some info about the items you would like to donate and add this item to your order.</p>
                    <textarea></textarea>
                    <button>Add To Quote</button>
                </div>
            }
        </div>
    )
}

export default TypeSelector;