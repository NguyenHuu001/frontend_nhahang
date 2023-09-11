import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
function Header() {
    return (
        <header className="container-fluid p-0 py-4">
            <div className="container d-flex">
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div className='d-flex'>
                    <div>Trang chủ</div>
                    <div>Giới thiệu</div>
                    <div>Sản phẩm</div>
                    <div>Khuyến mãi</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
