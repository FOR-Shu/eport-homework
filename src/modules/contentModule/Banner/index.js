import Image from 'next/image'
import classes from "./Banner.module.scss"

const Banner = () => {

    return (
        <div className={classes.banner}>
            <div className={classes.banner__slider}>
                <Image id='slide-1' src='/slider.jpg' alt='img' width='45' height='45' layout="responsive" />
                <Image id='slide-2' src='/slider.jpg' alt='img' width='45' height='45' layout="responsive" />
                <Image id='slide-3' src='/slider.jpg' alt='img' width='45' height='45' layout="responsive" />
            </div>
            <div className={classes.banner__nav}>
                <a href='#slide-1'></a>
                <a href='#slide-2'></a>
                <a href='#slide-3'></a>
            </div>
        </div>
    );
}

export default Banner;