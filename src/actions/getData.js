import axios from 'axios';
import api from '../api/Api-configuration';

const getData = name => dispatch =>{
    const url = api.url + name;
    try {
        return axios.get(url).then(response => {
            dispatch ({
                type: 'GET_DATA',
                payload: response.data
            });
        });
    } catch (error) {
        console.log("ERROR:", error);
    }
};
export default getData;
