import './product.scss';
import SiderBarr from '../../Layouts/sidebar';

function Product() {
    return (
        <div>
            <div className="banner_product">
                <span className="titlesp">Tất cả sản phẩm</span>
                <img
                    style={{ height: '250px', objectFit: 'cover' }}
                    src="https://bizweb.dktcdn.net/100/053/643/themes/877493/assets/sub-banner-top.jpg?1662429924636"
                    alt=""
                />
            </div>
            <div className="container mt-4">
                <div className="row">
                    <SiderBarr />
                    <div className="col-md-9">
                        <div className="ps-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <div style={{ textTransform: 'uppercase' }}>Sản phẩm bán chạy</div>
                            </div>
                            <div className="d-flex">
                                <div className="col-md-4 ps-3">
                                    <div>
                                        <img
                                            src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/1.jpg?v=1454064638327"
                                            alt=""
                                        />
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="">340.000đ</span>
                                        <span className="mt-3 item">Pizza nhân bò phô mai</span>
                                    </div>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button className="btn_buy px-4 py-2">Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;