import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/Button';
import { BUTTON_TYPES } from '@/data/button';

import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={`${classes.footer__content}`}>
                <div className={`${classes.footer__content__menu}`}>
                    <Link href="/" className={classes.footer__content__menu__logo}>
                        {/* <img src={logo} /> */}
                        <Image src='/img/logo-white.png' alt='Eport' width='191' height='61' />
                    </Link>
                    <div className={`${classes.footer__content__menu__link}`}>
                        <ul>
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a>興趣測驗</a>
                                </Link>
                            </li>
                            <li style={{ marginTop: '16px' }}>
                                <Link href="/" legacyBehavior>
                                    <a>學習情報</a>
                                </Link>
                            </li>
                            <li style={{ marginTop: '16px' }}>
                                <Link href="/" legacyBehavior>
                                    <a>上架活動</a>
                                </Link>
                            </li>
                            <li style={{ marginTop: '16px' }}>
                                <Link href="/" legacyBehavior>
                                    <a>搜尋活動</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.footer__content__menu__link}`}>
                        <ul>
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a>聯絡我們</a>
                                </Link>
                            </li>
                            <li style={{ marginTop: '16px' }}>
                                <Link href="/" legacyBehavior>
                                    <a>常見問題</a>
                                </Link>
                            </li>
                            <li style={{ marginTop: '16px' }}>
                                <Link href="/" legacyBehavior>
                                    <a>隱私權政策</a>
                                </Link>
                            </li>
                            <li style={{ marginTop: '16px' }}>
                                <Link href="/" legacyBehavior>
                                    <a>個資保護聲明</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.footer__content__menu__info}>
                        <div className={classes.footer__content__menu__info__social}>
                            <Button type={BUTTON_TYPES.ICON} icon='facebook' />
                            <Button type={BUTTON_TYPES.ICON} icon='instagram' />
                            <Button type={BUTTON_TYPES.ICON} icon='youtube' />
                        </div>
                        <ul>
                            <li style={{ marginTop: '16px' }}>
                                <Link href="/" legacyBehavior>
                                    <a>E-mail: eport_info@eporttw.com</a>
                                </Link>
                            </li>
                            <li style={{ marginTop: '16px' }}>
                                <Link href="/" legacyBehavior>
                                    <a>友善連結</a>
                                </Link>
                            </li>
                            <li style={{ marginTop: '16px' }}>
                                <p>© 2023 E-port. All Rights Reserved.</p>
                            </li>
                        </ul>
                        <div className={classes.footer__content__menu__info__mobile}>
                            <a href='#'>聯絡我們</a>
                            <a href='#'>常見問題</a>
                            <a href='#'>隱私權政策</a>
                            <a href='#' style={{border: '0', paddingRight: '0', marginRight: '0'}}>個資保護聲明</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
