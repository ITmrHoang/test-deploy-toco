import Button from "../../components/Button/Button";
import classNames from "classnames/bind";
import styles from "./Product.module.css";
import { RemoveCircle, AddCircle } from "@mui/icons-material";

const cx = classNames.bind(styles);

const Bill = (props) => {
    const { bills, setBills } = props;
    const totalBill = bills.reduce((total, item) => total + item.price * item.qty, 0);
    const totalQty = bills.reduce((total, item) => total + item.qty, 0);

    const handleDeleteAll = () => {
        const deleteAll = [];
        setBills(deleteAll);
    };

    const handleAddItem = (bill) => {
        const exist = bills.find((item) => item.id === bill.id);
        if (exist) {
            setBills(bills.map((item) => (item.id === bill.id ? { ...exist, qty: exist.qty + 1 } : item)));
        }
    };

    const handleRemoveItem = (bill) => {
        const exist = bills.find((item) => item.id === bill.id);
        if (exist.qty === 1) {
            setBills(bills.filter((item) => item.id !== bill.id));
        } else {
            setBills(bills.map((item) => (item.id === bill.id ? { ...exist, qty: exist.qty - 1 } : item)));
        }
    };

    return (
        <>
            <div className={cx("bill-container")}>
                <div className={cx("bill-top")}>
                    <div className={cx("bill-title")}>Giỏ hàng của tôi</div>
                    <div className={cx("clear-all")} onClick={handleDeleteAll}>
                        Xoá tất cả
                    </div>
                </div>
                <div className={cx("bill-content")}>
                    {bills.length === 0 ? (
                        <p>Chưa có sản phẩm nào!</p>
                    ) : (
                        <>
                            {bills.map((bill, index) => (
                                <div className={cx("bill-infor")} key={index}>
                                    <div key={bill.id}>
                                        <div>{bill.title}</div>
                                        <div className={cx("bill-price")}>
                                            {bill.price}
                                            <span>x</span>
                                            <span>{bill.qty}</span>
                                        </div>
                                    </div>
                                    <div className={cx("bill-action")}>
                                        <div onClick={() => handleRemoveItem(bill)}>
                                            <RemoveCircle style={{ color: "#799dd9" }} />
                                        </div>
                                        <span>{bill.qty}</span>
                                        <div onClick={() => handleAddItem(bill)}>
                                            <AddCircle style={{ color: "#799dd9" }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <div className={cx("bill-total")}>
                    <img
                        src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-glass-tea.png"
                        alt=""
                    />
                    <span>X</span>
                    <span>{totalQty}</span>
                    <span>=</span>
                    <span>{totalBill}</span>
                </div>
                <Button title="Thanh toán" styles={{ width: "100%" }} />
            </div>
            <div className={cx("bill-container-active")}>
                <div className={cx("bill-total-active")}>
                    <img
                        src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-glass-tea.png"
                        alt=""
                    />
                    <span>X</span>
                    <span>{totalQty}</span>
                    <span>=</span>
                    <span>{totalBill}</span>
                </div>
                <div className={cx("btn-bill-active")}>
                    <Button title="Thanh toán" />
                </div>
            </div>
        </>
    );
};

export default Bill;
