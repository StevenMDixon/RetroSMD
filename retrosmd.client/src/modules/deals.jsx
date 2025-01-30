import classes from '../styles/layout.module.css';
import sClasses from '../styles/components/deals.module.css';

function Deals(){
    return(
        <div className={`${classes.Section}`} >
            <p className={classes.SectionTitle}>Current Specials</p>
            <div className={`${classes.SectionContentWrapperFlex} ${sClasses.DealCardWrapper}`} >
                <div className={sClasses.DealCard} >
                    <div className={`${classes.SectionTitleWrapper}`} >
                        <i className='bx bxs-offer'></i>
                        <p className={`${classes.SectionSubTitle}`} >Battery replacements</p>
                    </div>
                    <p>Send in 5 carts and only pay for 4</p>
                </div>
                <div className={sClasses.DealCard} >
                    <div className={`${classes.SectionTitleWrapper}`} >
                        <i className='bx bxs-badge-dollar'></i>
                        <p className={`${classes.SectionSubTitle}`} >Trade-in program</p>
                    </div>
                    <p>Send in retro broken/working consoles or games and get a discount on services</p>
                </div>
            </div>
        </div>
    )
}

export default Deals;