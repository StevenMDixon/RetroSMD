import classes from '../../styles/layout.module.css';
import sClasses from '../../styles/components/socialmedia.module.css';

function SocialMedia() {
    return (
        <div className={`${classes.Section}`}>
            <div>
                <p className={`${classes.SectionTitle}`}>Check us out on these platforms!</p>
            </div>
            <div className={`${classes.SectionContentWrapperFlex} ${sClasses.SocialMediaWrapper}`}>
                <div className={`${sClasses.SocialMediaIcon}`}>
                    <a target="_blank" href="https://twitter.com/@RetroSMD"><i className='bx bxl-twitter'></i><p>@RetroSMD</p></a>
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
                    <a target="_blank" href="https://www.ebay.com/sch/i.html?_trksid=p3692&_ssn=retrosmd"><i className='bx bxl-ebay' ></i><p>RetroSMD</p></a>
                </div>
                <div className={`${sClasses.SocialMediaIcon}`}>
                    <a target="_blank" href="https://www.facebook.com/people/Retrosmd-LLC/61574181688793/"><i className='bx bxl-facebook' ></i><p>RetroSMD</p></a>
                    
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;