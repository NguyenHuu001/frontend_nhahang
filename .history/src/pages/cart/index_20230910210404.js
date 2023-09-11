import './cart.scss';
import { fetchCart } from '../../services/restaurant_services';
import { useEffect, useState } from 'react';
import nodeFoge from 'node-forge'
function Cart() {
    const mng = localStorage.getItem('mng');
    const [dish, setDish] = useState([]);
    useEffect(() => {
        itemCart();
    }, []);

    const itemCart = async () => {
        try {
            const response = await fetchCart(mng).then((res) => {
                setDish(res);
                localStorage.setItem('coutnDish', res.length);
            });
        } catch (error) {
            console.log('lỗi');
        }
    };
    return (
        <div className="container mt-5">
            {dish ? (
                dish.map((item) => (
                    <div className="d-flex py-3 " key={item[0]}>
                        <div className="col-md-3 ">
                            <img className="img_cart" src={item[4]} alt="" />
                        </div>
                        <div className="col-md-7 ms-4 d-flex flex-column justify-content-evenly">
                            <span>{item[1]}</span>
                            <span>{item[3]} đ</span>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            <div>
                                <button className="btn_delete">Xóa</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div> lỗi</div>
            )}
        </div>
    );
}

export default Cart;
