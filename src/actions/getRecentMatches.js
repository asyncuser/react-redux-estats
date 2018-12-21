import axios from 'axios';
import api from '../api/Api-configuration';

const getRecentMatches = steamId => dispatch => {
    const url = api.matchesUrl + steamId + '/recentMatches';
    try {
        axios.get(url).then(response => {
            dispatch ({
                type: 'GET_RECENT_MATCHES',
                payload: response.data
            });
        })
    } catch (error) {
        console.log("ERROR:", error);
    }
};
export default getRecentMatches;
