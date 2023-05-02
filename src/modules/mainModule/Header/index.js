import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import { BUTTON_TYPES } from '@/data/button';

import classes from './Header.module.scss';
import SearchBar from '@/components/SearchBar';


const Header = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.pageYOffset > 200);
            console.log(window.pageYOffset);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <header className={sticky ? `${classes.header} ${classes.sticky}`: `${classes.header}`}>
            <div className={classes.header__content}>
                <Link href="/" className={classes.header__content__logo}>
                    <Image src='/img/eport.png' alt='Eport' width='144' height='45' />
                </Link>
                <div className={classes.header__content__action}>
                    <Dropdown />
                    <SearchBar />
                </div>
                <nav className={`${classes.header__content__nav}`}>
                    <ul>
                        <li>
                            <Link href="/" legacyBehavior>
                                <a>興趣測驗</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" legacyBehavior>
                                <a>學習情報</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" legacyBehavior>
                                <a>上架活動</a>
                            </Link>
                        </li>
                    </ul>
                    <Button type={BUTTON_TYPES.PRIMARY} text='登入' />
                </nav>
                <div className={classes.header__content__toggle}>
                        <BiMenuAltRight />
                </div>
            </div>
        </header>
    );
};

export default Header;
