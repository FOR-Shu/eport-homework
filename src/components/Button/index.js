import { BUTTON_TYPES } from "@/data/button";
import classes from "./Button.module.scss";
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/Fa';

const Button = (props) => {
    const { type, text, icon } = props || [];

    switch (type) {
        case BUTTON_TYPES.PRIMARY:
            return <button className={`${classes.button} ${classes.btnPrimary}`}>{text}</button>;
        case BUTTON_TYPES.OUTLINE:
            return <button className={`${classes.button} ${classes.btnOutline}`}>{text}</button>;
        case BUTTON_TYPES.ICON:
            switch (icon) {
                case 'facebook':
                    return <div className={`${classes.btnIcon}`}><FaFacebookF/></div>;
                case 'instagram':
                    return <div className={`${classes.btnIcon}`}><FaInstagram/></div>;
                case 'youtube':
                    return <div className={`${classes.btnIcon}`}><FaYoutube/></div>;
            }
        default:
            return <button className={`${classes.button} ${classes.btnText}`}>{text}</button>;
    }
};

export default Button;
