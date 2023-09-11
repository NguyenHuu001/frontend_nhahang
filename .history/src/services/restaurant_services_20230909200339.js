import { instance } from './axios';
// import axios from 'axios';
const fetchLogin = (loginData, config) => {
    return instance.post('/login', loginData, config);
};
const fetchDish = () => {
    return instance.get('/MonAn');
};

const fetchCart = (maND) => {
    return instance.get(/GioHang?maNguoiDung=${maND} );
};
export { fetchLogin, fetchDish, fetchCart };
