import Card from '@/components/Card'
import News from '@/modules/contentModule/News'
import Activity from '../Activity';
import Banner from '../Banner';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Activity title='營隊專區' />
            <News title='新鮮乾貨' />
            <Activity title='精選活動' />
            <News title='新鮮乾貨' />
        </div>
    );
}

export default HomePage;