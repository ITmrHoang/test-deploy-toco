import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./HeaderProduct.module.css";
import logo1 from "../../../assets/images/logo/logo1.png";

const cx = classNames.bind(styles);

const HeaderProduct = () => {
    return (
        <div className={cx("header-container")}>
            <div className={cx("header-wrapper")}>
                <Link className={cx("logo")} to="/">
                    <img src={logo1} alt="" />
                </Link>
                <input className={cx("input-search")} type="text" placeholder="Tìm kiếm sản phẩm..." />
                <button className={cx("btn-sign")}>Đăng nhập</button>
            </div>
        </div>
    );
};

export default HeaderProduct;
