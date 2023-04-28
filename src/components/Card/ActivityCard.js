import Image from 'next/image'
import { useState } from "react"
import classes from "./Card.module.scss"

import { GrLocation, GrCreditCard, GrCalendar } from 'react-icons/Gr'

const ActivityCard = () => {
    const [newCards] = useState([
        {
            title: '108課綱專業講師：教你寫出教授超愛的學習歷程',
            type: '講座',
            deadline: '12/31 報名截止',
            time: '2023-04-19(三) ~ 2023-12-31(日)',
            location: '全國各高中職學校',
            pay: '免費',
            tags: ['講座', '學習歷程檔案', '職涯探索', '學涯探索', '未來趨勢', '升學', '面試', '自我探索']
        },
        {
            title: '選擇適合自己的類組：選組前的探索與思維',
            type: '講座',
            deadline: '12/31 報名截止',
            time: '2023-04-19(三) ~ 2023-12-31(日)',
            location: '全國各高中職學校',
            pay: '免費',
            tags: ['講座', '學習歷程檔案', '職涯探索', '學涯探索', '未來趨勢', '升學', '面試', '自我探索']
        },
        {
            title: '學習歷程領航計畫-構出學習藍圖，航向未來方向',
            type: '講座',
            deadline: '12/31 報名截止',
            time: '2023-03-28(二) ~ 2023-12-31(日)',
            location: '全國各高中職學校',
            pay: '免費',
            tags: ['講座', '學習歷程檔案', '職涯探索', '學涯探索', '未來趨勢', '升學', '面試', '自我探索', '自主學習', '科系選擇']
        },
        {
            title: '雙橡｜如何引導孩子設計自主學習計畫｜講座',
            type: '講座',
            deadline: '05/05 報名截止',
            time: '2023-05-06(六)',
            location: '線上',
            pay: '免費',
            tags: ['講座', '學習動機', '軟實力培養', '線上免費講座']
        },
    ])

    return (
        <div className={`${classes.activityCards}`}>
            {newCards.map((card, i) => (
                <div key={i} className={classes.activityCards__card}>
                    <div className={classes.activityCards__card__highlightTags}>
                        <div className={classes.activityCards__card__highlightTags__deadline}>{card.deadline}</div>
                        <div className={classes.activityCards__card__highlightTags__type}>{card.type}</div>
                    </div>
                    <Image src='/cardImg.jpg' alt='img' width='45' height='45' layout="responsive" />
                    <h3>{card.title}</h3>
                    <div className={classes.activityCards__card__content}>
                        <div className={classes.activityCards__card__content__list}>
                            <GrCalendar/>
                            <span>{card.time}</span>
                        </div>
                        <div className={classes.activityCards__card__content__list}>
                            <GrLocation />
                            <span>{card.location}</span>
                        </div>
                        <div className={classes.activityCards__card__content__list}>
                            <GrCreditCard />
                            <span>{card.pay}</span>
                        </div>
                    </div>
                    <div className={classes.activityCards__card__tag} >
                        {card.tags.map((tag, i) => (
                            <span key={`tag-${i}`} href="#"># {tag}</span>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    )
};

export default ActivityCard;
