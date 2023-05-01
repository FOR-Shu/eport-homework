import Card from '@/components/Card'

import classes from "./Activity.module.scss";
import Button from '@/components/Button';
import { BUTTON_TYPES } from '@/data/button';

const Activity = (props) => {
    const { title, bgColor, moreText } = props || {};

    return (
        <div className={classes.container} style={{ backgroundColor: bgColor}}>
            <div className={classes.container__content}>
                <h2 className={classes.container__content__title} >{title}</h2>
                <Card type='activity' />
                <Button type={BUTTON_TYPES.TEXT} text={moreText} />
            </div>
        </div>
    );
}

export default Activity;