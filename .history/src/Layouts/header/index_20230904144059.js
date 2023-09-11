import logo from '../../assets/imgs/sv_logo_dashboard.png';
import { Link } from 'react-router-dom';
import './header.scss';
function Header() {
    return (
        <header className="container-fluid p-0 py-4 header">
            <div className="container d-flex justify-content-between">
                <div className="">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="me-4 fs-5 fst-mormal header_hover">Trang chủ</div>
                    <div className="me-4 fs-5 fst-mormal header_hover">Giới thiệu</div>
                    <div className="me-4 fs-5 fst-mormal header_hover">Sản phẩm</div>
                </div>
                <Link to='/login' style={{textDecoration:'none'}}>
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="fs-5 fst-mormal header_hover">Đăng nhập</div>
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;