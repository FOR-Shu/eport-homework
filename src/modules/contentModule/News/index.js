import Card from '@/components/Card'

import classes from "./News.module.scss";
import Button from '@/components/Button';
import { BUTTON_TYPES } from '@/data/button';

const News = (props) => {
    const { title } = props || {};

    return (
        <div className={classes.container}>
            <div className={classes.container__content}>
                <h2 className={classes.container__content__title} >{title}</h2>
                <Card />
                <Button type={BUTTON_TYPES.TEXT} text='更多乾貨' />
            </div>
        </div>
    );
}

export default News;