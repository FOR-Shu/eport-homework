import Image from 'next/image';
import { useState } from "react";
import classes from "./Card.module.scss";
import NewsCard from './NewsCard';
import ActivityCard from './ActivityCard';

const Card = (props) => {
    const { type, title } = props || [];

    switch (type) {
        case 'news':
            return <NewsCard />
        case 'activity':
            return <ActivityCard />
    }
};

export default Card;
