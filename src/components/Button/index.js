import { BUTTON_TYPES } from "@/data/button";
import classes from "./Button.module.scss";

const Button = (props) => {
    const { type, text } = props || [];

        switch (type) {
            case BUTTON_TYPES.PRIMARY:
                return <button className={`${classes.button} ${classes.btnPrimary}`}>{text}</button>;
            case BUTTON_TYPES.OUTLINE:
                return <button className={`${classes.button} ${classes.btnOutline}`}>{text}</button>;
            case BUTTON_TYPES.ICON:
                return <button className={`${classes.btnIcon}`}></button>;
            default:
                return <button className={`${classes.button} ${classes.btnText}`}>{text}</button>;
        }
};

export default Button;
