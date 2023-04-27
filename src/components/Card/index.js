import Image from 'next/image';
import { useState } from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
    const [newCards] = useState([
        {
            title: '熱愛藝術的他，國中開始思考學習的本質，高中決定將生活放在自己喜歡的事物上',
            text: '在以白色為基底的展覽空間，邵一恩在為了佈置成果分享會來回穿梭的同學前，介紹他的油畫作品。在強調自由創作的實驗學校，不同性格的學生用不同的媒介讓想法與創意碰撞，從交集的過程中找到自我',
            tag: '藝術學群'
        },
        {
            title: '成大特殊選才榜首經驗分享！2 個特選備審重點告訴你',
            text: '讓錄取成大生科榜首、中山生科及中山醫生醫，備取長庚醫技的學姊告訴你特選的',
            tag: '醫藥衛生學群'
        },
        {
            title: '農業肥料竟然會爆炸！聊聊什麼是「硝酸銨」',
            text: '「硝酸銨」除了肥料用途，早期曾製成土製炸彈！',
            tag: '數理化學群',
        },
    ])

    return (
        <div className={classes.cards}>
            {newCards.map((card, i) => (
                <div key={i} className={classes.cards__card}>
                    <Image src='/img3.jpeg' alt='img' width='45' height='45' layout="responsive" />
                    <div className={classes.cards__card__tag}>
                        <a href="#"># {card.tag}</a>
                    </div>
                    <h3>{card.title}</h3>
                    <div className={classes.cards__card__content}>
                        <p>{card.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Card;
