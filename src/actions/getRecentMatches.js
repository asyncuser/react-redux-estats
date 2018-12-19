import axios from 'axios';
import api from '../api/Api-configuration';

const getData = () => dispatch =>{
    const url = api.url;
    axios.get(url).then(response => {
        dispatch ({
            type: 'GET_DATA',
            payload: response.data
        });
    });
};
export default getData;
