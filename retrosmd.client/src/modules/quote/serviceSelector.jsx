/* eslint-disable react/prop-types */
const ServiceSelector = ({ classes, options, setSelected, moveToNextStep }) => {
    const selected = [];

    return (
        <div className={classes.Selector}>
            <p>Select some services!</p>
            {
                options.map((service) => (
                    <div key={service.serviceid}>
                        <input type="checkbox"  className={classes.serviceoption} name={service.name} value={service.name} ></input>
                        <label htmlFor={service.name} >{service.name}</label>
                    </div>
                ))
            }

            <button onClick={() => moveToNextStep(setSelected, selected)} >Next</button>
        </div>
    )
}

export default ServiceSelector;