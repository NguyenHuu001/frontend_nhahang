import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
function Header() {
    return (
        <header className="container-fluid p-0 py-4">
            <div className="container d-flex justify-content-between">
                <div className="">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="me-3 fs-5">Trang chủ</div>
                    <div className="me-3 fs-5">Giới thiệu</div>
                    <div className="me-3 fs-5">Sản phẩm</div>
                    <div className="me-3 fs-5">Khuyến mãi</div>
                    <div className=" fs-5">Tài khoản</div>
                </div>
            </div>
        </header>
    );
}

export default Header;