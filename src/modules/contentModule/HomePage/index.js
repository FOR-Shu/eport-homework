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
            <News title='新鮮乾貨' />
            <Activity title='精選活動' bgColor='#F3F3F3' />
            <News title='新鮮乾貨' />
        </div>
    );
}

export default HomePage;