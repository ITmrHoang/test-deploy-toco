import classNames from "classnames/bind";
import styles from "./Store.module.css";
import { StoreMB, StoreMN } from "./StoreData";

const cx = classNames.bind(styles);

const Store = () => {
    return (
        <div className={cx("store-container")}>
            <div className={cx("store-banner")}>CỬA HÀNG</div>
            <div className={cx("content-container")}>
                <div className={cx("store-title")}>DANH SÁCH CỬA HÀNG MIỀN BẮC</div>
                <table className={cx("store-list")}>
                    <tbody>
                        {StoreMB.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.address}</td>
                                <td>{item.district}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={cx("store-title")}>DANH SÁCH CỬA HÀNG MIỀN NAM</div>
                <table className={cx("store-list")}>
                    <tbody>
                        {StoreMN.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.address}</td>
                                <td>{item.district}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Store;
