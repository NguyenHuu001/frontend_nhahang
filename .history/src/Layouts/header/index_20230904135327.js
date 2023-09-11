import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/imgs/sv_logo_dashboard.png';
import {LI}
import './header.scss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
                <div className="d-flex justify-content-end align-items-center">
                    <div className="fs-5 fst-mormal header_hover">Đăng nhập</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
