import './home.scss';
import banner from '../../assets/imgs/baner_home.png'
function Home() {
    return <div>
        <div className='container-fluid p-0'>
            <img src={banner} alt='banner'></img>
        </div>
    </div>;
}

export default Home;