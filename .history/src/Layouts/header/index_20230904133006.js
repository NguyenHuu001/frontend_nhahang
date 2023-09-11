import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
function Header() {
    return (
        <header className="container-fluid p-0 py-4">
            <div className="container">
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div>
                    <div>Trang chủ</div>
                    <div>Giới thiệu</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
}

export default Header;