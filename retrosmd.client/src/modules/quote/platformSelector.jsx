/* eslint-disable react/prop-types */
const PlatformSelector = ({classes, setSelectedPlatform, moveToNextStep}) => {
    const platforms = ["Console", "Controller", "Game Cart", "Donation"]
    return (
        <div className={classes.platformSelection}>
            <p>I have a:</p>
            {
                platforms.map((title, i) => (
                    <div key={title + i} className={classes.platformCard} onClick={() => moveToNextStep(setSelectedPlatform, title)} >
                        <p>{title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PlatformSelector;