import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import logo1 from "../../../assets/images/logo/logo1.png";
import { Menu } from "@mui/icons-material";

const cx = classNames.bind(styles);

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const onChangeBg = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", onChangeBg);

    return (
        <div className={navbar ? cx("active-bg") : cx("container-header")}>
            <div className={cx("header-wrapper")}>
                <img className={cx("logo")} src={logo1} alt="logo" />
                <ul className={cx("list-item")}>
                    <li className={cx("item")}>
                        <Link className={cx("item-link")} to="/">
                            TRANG CHỦ
                        </Link>
                    </li>
                    <li className={cx("item")}>
                        <Link className={cx("item-link")} to="/intro">
                            GIỚI THIỆU
                        </Link>
                    </li>
                    <li className={cx("item")}>
                        <Link className={cx("item-link")} to="/product">
                            SẢN PHẨM
                        </Link>
                    </li>
                    <li className={cx("item")}>
                        <Link className={cx("item-link")} to="/news">
                            TIN TỨC
                        </Link>
                    </li>
                    <li className={cx("item")}>
                        <Link className={cx("item-link")} to="/store">
                            CỬA HÀNG
                        </Link>
                    </li>
                    <li className={cx("item")}>
                        <Link className={cx("item-link")} to="/recruit">
                            TUYỂN DỤNG
                        </Link>
                    </li>
                    <li className={cx("item")}>
                        <Link className={cx("item-link")} to="/franchise">
                            NHƯỢNG QUYỀN
                        </Link>
                    </li>
                </ul>

                <div className={cx("active-menu")}>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Header;
