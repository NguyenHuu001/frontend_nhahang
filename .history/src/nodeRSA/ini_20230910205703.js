import NodeRSA from "node-rsa";
export default {
    method: {
        rsaEncrypt(text, key) {
            let keyPublic = new NodeRSA(key);
            const encrypted = keyPublic.encrypt(text, 'base64');
            return e
        }
    }
}