import classes from '../styles/layout.module.css';
import sClasses from '../styles/components/socialmedia.module.css';

function SocialMedia() {
    return (
        <div className={`${classes.Section}`}>
            <div>
                <p className={`${classes.SectionTitle}`}>Check us out on these platforms!</p>
            </div>
            <div className={`${classes.SectionContentWrapperFlex} ${sClasses.SocialMediaWrapper}`}>
                <div className={`${sClasses.SocialMediaIcon}`}>
                    <a target="_blank" href="https://twitter.com/@RetroSMD"><i className='bx bxl-twitter'></i></a>
                    <p>@RetroSMD</p>
                </div>
                {/*<div className={`${sClasses.SocialMediaIcon}`}>*/}
                {/*    <a target="_blank" href="https://www.youtube.com/@RetroSMD"><i className='bx bxl-youtube'></i></a>*/}
                {/*    <p>@RetroSMD</p>*/}
                {/*</div>*/}
                {/*<div className={`${sClasses.SocialMediaIcon}`}>*/}
                {/*    <a target="_blank" href="https://www.twitch.tv/retrosmd"><i className='bx bxl-twitch' ></i></a>*/}
                {/*    <p>retrosmd</p>*/}
                {/*</div>*/}
                <div className={`${sClasses.SocialMediaIcon}`}>
                    <a target="_blank" href="https://www.ebay.com/sch/i.html?_trksid=p3692&_ssn=retrosmd"><i className='bx bxl-ebay' ></i></a>
                    <p>RetroSMD</p>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;