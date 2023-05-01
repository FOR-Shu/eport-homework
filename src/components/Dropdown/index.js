import { FaAngleDown } from "react-icons/Fa";

import classes from "./Dropdown.module.scss"

const Dropdown = () => {
    return (
        <div className={classes.dropDown}>
            <div className={classes.dropDown__select}>
                <span style={{ paddingRight: '5px' }}>探索</span>
                <FaAngleDown />
            </div>
            <div className={classes.dropDown__menu}>
                <ul>
                    <li><a>營隊專區</a></li>
                    <hr />
                    <li><a>競賽專區</a></li>
                    <hr />
                    <li><a>課程專區</a></li>
                    <hr />
                    <li><a>免費專區</a></li>
                    <hr />
                    <li><a>檢定證照</a></li>
                    <hr />
                    <li><a>精選活動</a></li>
                </ul>
            </div>
        </div>
    );

};

export default Dropdown;