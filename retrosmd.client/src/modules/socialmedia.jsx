import classes from '../styles/services.module.css';

function SocialMedia() {
    return (
        <div className={`${classes.Section}`}>
            <div className={`${classes.ContentHeader}`} >
                <p className={`${classes.SectionTitle}`}>Check us out online!</p>
            </div>
            <div>
                <box-icon type='logo' name='twitter'></box-icon>
                <box-icon name='youtube' type='logo' ></box-icon>
                <box-icon name='ebay' type='logo' ></box-icon>
            </div>
        </div>
    )
}

export default SocialMedia;