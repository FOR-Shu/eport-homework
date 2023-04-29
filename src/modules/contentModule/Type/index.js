import Image from 'next/image'
import { useState } from 'react'

import Button from '@/components/Button'
import { BUTTON_TYPES } from '@/data/button'

import classes from "./Classification.module.scss"

const Type = (props) => {
    const { title, bgColor } = props || {};
    const [items] = useState([
        {
            title: '營隊專區',
            src: '/img/type-camp.png',
        },
        {
            title: '競賽專區',
            src: '/img/type-competition.png',
        },
        {
            title: '課程專區',
            src: '/img/type-course.png',
        },
        {
            title: '免費專區',
            src: '/img/type-free.png',
        },
        {
            title: '檢定證照',
            src: '/img/type-certification.png',
        },
        {
            title: '精選活動',
            src: '/img/type-featured.png',
        },
    ])

    return (
        <div className={classes.type} style={{ backgroundColor: bgColor }}>
            <div className={classes.type__content}>

                {/* 圖片 */}
                <div className={classes.type__content__img}>
                    <Image src='/img/explore.png' alt='explore' width='540' height='40' />
                </div>
                {/* 組別按鈕 */}
                <div className={classes.type__content__group}>
                    <h2 className={classes.type__content__group__title}>{title}</h2>
                    <div className={classes.type__content__group__btnGroup}>
                        {items.map((item, i) => (
                            <a key={`btn-${i}`} href='#'>
                                <div className={classes.type__content__group__btnGroup__btn}>
                                    <div className={classes.type__content__group__btnGroup__btn__item}>
                                        <Image src={`${item.src}`} alt={`${item.title}`} width='40' height='40' />
                                        <div className={classes.type__content__group__btnGroup__btn__item__text}><p>{item.title}</p></div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Type;