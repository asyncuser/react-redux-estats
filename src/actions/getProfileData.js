import axios from 'axios';
import api from '../api/Api-configuration';

const getProfileData = steamId => dispatch => {
    const url = api.profileUrl + steamId;
    try {
        axios.get(url).then(response => {
            dispatch ({
                type: 'GET_PROFILE_DATA',
                payload: response.data
            });
        });
    } catch (error) {
        console.log("ERROR:", error);
    }
};
export default getProfileData;
