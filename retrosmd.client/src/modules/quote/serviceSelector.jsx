/* eslint-disable react/prop-types */
const ServiceSelector = ({ classes, options, setSelected, moveToNextStep }) => {
    const selected = [];

    return (
        <div className={classes.Selector}>
            <p>Select some services!</p>
            {
                options.map((service) => (
                    <div key={service.serviceid} className={classes.platformCard} >
                        <p>{service.name}</p>
                    </div>
                ))
            }

            <button onClick={() => moveToNextStep(setSelected, selected)} >Next</button>
        </div>
    )
}

export default ServiceSelector;