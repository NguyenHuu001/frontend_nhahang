import { instance } from './axios';
// import axios from 'axios';
const fetchLogin = (loginData, config) => {
    return instance.post('/login', loginData, config);
};
const fetchDish = () => {
    return instance.get('/MonAn');
}

const fetchCart = () => {
    return instance.get('/GioHang')
}
export { fetchLogin, fetchDish };