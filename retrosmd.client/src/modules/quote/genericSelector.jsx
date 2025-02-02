/* eslint-disable react/prop-types */
const Selector = ({ classes, subText, options, setSelected, moveToNextStep }) => {
    return (
        <div className={classes.Selector}>
            <p>{subText}</p>
            {
                options.map((title, i) => (
                    <div key={title + i} className={classes.platformCard} onClick={() => moveToNextStep(setSelected, title)} >
                        <p>{title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Selector;