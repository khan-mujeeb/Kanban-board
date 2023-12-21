import axios from 'axios';

const BASE_URL = 'https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws';

const callApi = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export default callApi;
