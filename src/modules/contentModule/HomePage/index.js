import Card from '@/components/Card'
import News from '@/modules/contentModule/News'
import Activity from '../Activity';
import Banner from '../Banner';
import Type from '../Type';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Activity title='熱門推薦' bgColor='#FFFFFF' />
            <Type title='多元活動盡情探索' bgColor='#F1FAFF' />
            <Activity title='營隊專區' bgColor='#FFFFFF' />
            <Activity title='免費專區' bgColor='#F3F3F3' />
            <News />
        </div>
    );
}

export default HomePage;