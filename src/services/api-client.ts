import axios  from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2e3358877dbf442a96a2a29e526082b8"
    }
})