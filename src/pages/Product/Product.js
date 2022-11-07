import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.css";
import HeaderProduct from "../../components/Layout/HeaderProduct/HeaderProduct";
import ListProduct from "./ListProduct";
import Bill from "./Bill";

const cx = classNames.bind(styles);

const Product = () => {
    const [bills, setBills] = useState(() => {
        const billStore = JSON.parse(localStorage.getItem("billStore"));
        return billStore || [];
    });

    useEffect(() => {
        localStorage.setItem("billStore", JSON.stringify(bills));
    }, [bills]);

    return (
        <div>
            <HeaderProduct />
            <div className={cx("product-container")}>
                <div className={cx("product-wrapper")}>
                    <ListProduct bills={bills} setBills={setBills} />
                    <Bill bills={bills} setBills={setBills} />
                </div>
            </div>
        </div>
    );
};

export default Product;
