import { BiSearch } from "react-icons/bi";

import classes from "./SearchBar.module.scss"

const SearchBar = () => {
    return (
        <div className={classes.search}>
            <form action='' className={classes.search__bar}>
                <div>
                    <input type="text" placeholder="尋找活動..." name='q'></input>
                </div>
                <button type='submit'><BiSearch /></button>
            </form>
        </div>
    );

};

export default SearchBar;