import Card from '@/components/Card'
import News from '@/modules/contentModule/News'
import Activity from '../Activity';
import Banner from '../Banner';
import Type from '../Type';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Activity title='熱門推薦' bgColor='#FFFFFF' moreText='更多乾貨' />
            {/* <Type title='多元活動盡情探索' bgColor='#F1FAFF' /> */}
            <Activity title='營隊專區' bgColor='#FFFFFF' moreText='更多營隊' />
            <Activity title='免費專區' bgColor='#F3F3F3' moreText='更多活動' />
            <Activity title='精選活動' bgColor='#FFFFFF' moreText='更多活動' />
            {/* <News /> */}
        </div>
    );
}

export default HomePage;