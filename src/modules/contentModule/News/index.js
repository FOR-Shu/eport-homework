import Image from 'next/image'
import { useState } from 'react'
import Card from '@/components/Card'

import classes from "./News.module.scss";
import Button from '@/components/Button';
import { BUTTON_TYPES } from '@/data/button';

const News = () => {
    const [items] = useState([
        {
            src: '/img/blog-1.png',
            title: '大學學群',
            text: '完整18學群介紹'
        },
        {
            src: '/img/blog-2.png',
            title: '技職群類',
            text: '詳細21群類介紹'
        },
        {
            src: '/img/blog-3.png',
            title: '歷程檔案參採',
            text: '統整全臺百分比'
        },
        {
            src: '/img/blog-4.png',
            title: '各類學習文章',
            text: '高中職生都在學什麼？'
        },
    ])

    const [articles] = useState([
        {
            title: '若你喜歡與人接觸，選擇社會與心理學群，還必須具備「服務」的特質！',
            contact: '擁有「感性關懷」與「理性批判」能成為他人最大的幫助。',
            tag: '社會與心理學群'
        },
        {
            title: '你知道21世紀，人類正面臨資源分配不均的危機嗎？',
            contact: '生物資源竟然與人類的歷史有關，永續發展的記載可追朔至《尚書》。',
            tag: '生物資源學群'
        },
        {
            title: '地球與環境學群-「上知天文，下知地理」擁有敏銳的觀察力與調查分系能力',
            contact: '你知道除了公部門外，民間企業對於天氣與災害風險評估的需求也日益增加嗎？',
            tag: '地球與環境學群'
        },
    ])

    return (
        <div className={classes.container}>
            <div className={classes.container__content}>
                {/* 學習情報誌 */}
                <div className={classes.container__content__learnNews}>
                    <h2 className={classes.container__content__learnNews__title}>學習情報誌</h2>
                    <p style={{textAlign:'center'}}>探索各個大學科系的特色，發掘自己的興趣所在；深入了解升學參考項目，選擇最適合自己的路徑。</p>
                    <div className={classes.container__content__learnNews__btnGroup}>
                        {items.map((item, i) => (
                            <a key={`btn-${i}`} href='#'>
                                <div className={classes.container__content__learnNews__btnGroup__btn}>
                                    <div className={classes.container__content__learnNews__btnGroup__btn__item}>
                                        <Image src={`${item.src}`} alt={`${item.title}`} width='40' height='40' />
                                        <div className={classes.container__content__learnNews__btnGroup__btn__item__title}><h3>{item.title}</h3></div>
                                        <div className={classes.container__content__learnNews__btnGroup__btn__item__text}><p>{item.text}</p></div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                {/* 最新文章 */}
                <div className={classes.container__content__newPosts}>
                    <h2 className={classes.container__content__newPosts__title}>最新文章</h2>
                    {articles.map((article, i) => (
                        <>
                            <a key={`btn-${i}`} href='#'>
                                <div className={classes.container__content__newPosts__article}>
                                    <div className={classes.container__content__newPosts__article__index}><h3>{i + 1}</h3></div>
                                    <div className={classes.container__content__newPosts__article__contact}>
                                        <div className={classes.container__content__newPosts__article__contact__title}>{article.title}</div>
                                        <div className={classes.container__content__newPosts__article__contact__description}>{article.contact}</div>
                                        <div className={classes.container__content__newPosts__article__contact__tag}><span>{article.tag}</span></div>
                                    </div>
                                </div>
                            </a>
                            {i < articles.length - 1 ? <hr style={{ marginTop: '16px', marginBottom: '24px' }} /> : null}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;