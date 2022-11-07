import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import classNames from "classnames/bind";
import styles from "./Product.module.css";
import { HotProduct, MilkTea, FruitTea, Macchiato, Yogurt } from "./ProductData";
import { AddCircle } from "@mui/icons-material";

const cx = classNames.bind(styles);

const HotOder = (props) => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { bills, setBills } = props;

    const handleAddItem = (item) => {
        const exist = bills.find((x) => x.id === item.id);
        if (exist) {
            setBills(bills.map((x) => (x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x)));
        } else {
            setBills([...bills, { ...item, qty: 1 }]);
        }
    };

    return (
        <div className={cx("product")}>
            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleChange}>
                            <Tab label="Món nổi bật" value="1" />
                            <Tab label="Trà sữa" value="2" />
                            <Tab label="Fresh Fruit Tea" value="3" />
                            <Tab label="Macchiato Cream Cheese" value="4" />
                            <Tab label="Sữa chua dẻo" value="5" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        {HotProduct.map((item) => (
                            <div className={cx("product-card")} key={item.id}>
                                <img src={item.img} alt="" />
                                <div className={cx("bot-card")}>
                                    <div className={cx("title")}>{item.title}</div>
                                    <div className={cx("price")}>
                                        <div className={cx("new-price")}>
                                            {item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                        </div>
                                        <div className={cx("old-price")}>{item.oldPrice}</div>
                                    </div>
                                </div>
                                <button className={cx("btn-buy")} onClick={() => handleAddItem(item)} value={item}>
                                    <AddCircle style={{ fontSize: "xx-large" }} />
                                </button>
                            </div>
                        ))}
                    </TabPanel>
                    <TabPanel value="2">
                        {MilkTea.map((item) => (
                            <div className={cx("product-card")} key={item.id}>
                                <img src={item.img} alt="" />
                                <div className={cx("bot-card")}>
                                    <div className={cx("title")}>{item.title}</div>
                                    <div className={cx("price")}>
                                        <div className={cx("new-price")}>{item.price}</div>
                                        <div className={cx("old-price")}>{item.oldPrice}</div>
                                    </div>
                                </div>
                                <button className={cx("btn-buy")} onClick={() => handleAddItem(item)} value={item}>
                                    <AddCircle style={{ fontSize: "xx-large" }} />
                                </button>
                            </div>
                        ))}
                    </TabPanel>
                    <TabPanel value="3">
                        {FruitTea.map((item) => (
                            <div className={cx("product-card")} key={item.id}>
                                <img src={item.img} alt="" />
                                <div className={cx("bot-card")}>
                                    <div className={cx("title")}>{item.title}</div>
                                    <div className={cx("price")}>
                                        <div className={cx("new-price")}>{item.price}</div>
                                        <div className={cx("old-price")}>{item.oldPrice}</div>
                                    </div>
                                </div>
                                <button className={cx("btn-buy")} onClick={() => handleAddItem(item)} value={item}>
                                    <AddCircle style={{ fontSize: "xx-large" }} />
                                </button>
                            </div>
                        ))}
                    </TabPanel>
                    <TabPanel value="4">
                        {Macchiato.map((item) => (
                            <div className={cx("product-card")} key={item.id}>
                                <img src={item.img} alt="" />
                                <div className={cx("bot-card")}>
                                    <div className={cx("title")}>{item.title}</div>
                                    <div className={cx("price")}>
                                        <div className={cx("new-price")}>{item.price}</div>
                                        <div className={cx("old-price")}>{item.oldPrice}</div>
                                    </div>
                                </div>
                                <button className={cx("btn-buy")} onClick={() => handleAddItem(item)} value={item}>
                                    <AddCircle style={{ fontSize: "xx-large" }} />
                                </button>
                            </div>
                        ))}
                    </TabPanel>
                    <TabPanel value="5">
                        {Yogurt.map((item) => (
                            <div className={cx("product-card")} key={item.id}>
                                <img src={item.img} alt="" />
                                <div className={cx("bot-card")}>
                                    <div className={cx("title")}>{item.title}</div>
                                    <div className={cx("price")}>
                                        <div className={cx("new-price")}>{item.price}</div>
                                        <div className={cx("old-price")}>{item.oldPrice}</div>
                                    </div>
                                </div>
                                <button className={cx("btn-buy")} onClick={() => handleAddItem(item)} value={item}>
                                    <AddCircle style={{ fontSize: "xx-large" }} />
                                </button>
                            </div>
                        ))}
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default HotOder;
