import axios from 'axios';
import api from '../api/Api-configuration';

const getProMatches = () => dispatch => {
    const url = api.proMatchesUrl;
    try {
        axios.get(url).then(response => {
            dispatch ({
                type: 'GET_PRO_MATCHES',
                payload: response.data
            });
        });
    } catch (error) {
        console.log("ERROR:", error);
    }
};
export default getProMatches;
