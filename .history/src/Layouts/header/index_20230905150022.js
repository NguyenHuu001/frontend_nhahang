import logo from '../../assets/imgs/sv_logo_dashboard.png';
import { Link } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';
function Header() {
    const [blur, setBlur] = useState(f)
    return (
        <header className="container-fluid p-0 py-4 header">
            <div className="container d-flex justify-content-between">
                <div className="">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="me-4 fs-5 fst-mormal header_hover">Trang chủ</div>
                    </Link>
                    <div className="me-4 fs-5 fst-mormal header_hover">Giới thiệu</div>
                    <div className="me-4 fs-5 fst-mormal header_hover">Sản phẩm</div>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                    {/* <div className="fs-5 fst-mormal header_hover">
                        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                            Đăng nhập
                        </Link>
                    </div> */}
                    <span className="wrap_user mt-1 fw-bolder">
                        user name
                        <p className="log_out mt-4 fw-normal">Đăng xuất</p>
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
