import Button from '@/components/Button';
import { BUTTON_TYPES } from '@/data/button';

const Header = () => {

    return (
        <div className="container mx-auto">
            <Button type={BUTTON_TYPES.PRIMARY} text='登入'/>
        </div>
    );
};

export default Header;
