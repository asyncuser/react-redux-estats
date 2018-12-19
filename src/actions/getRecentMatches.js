import axios from 'axios';
import api from '../api/Api-configuration';

const getRecentMatches = ( steamId ) => dispatch => {
    const url = api.matchesUrl + steamId + '/recentMatches';
    axios.get(url).then(response => {
        dispatch ({
            type: 'GET_RECENT_MATCHES',
            payload: response.data
        });
    }).catch(error => {
        throw error
    });
};
export default getRecentMatches;
