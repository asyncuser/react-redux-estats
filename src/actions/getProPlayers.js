import axios from 'axios';
import api from '../api/Api-configuration';

const getProPlayers = () => dispatch => {
    const url = api.proPlayersUrl;
    try {
        axios.get(url).then(response => {
            dispatch ({
                type: 'GET_PRO_PLAYERS',
                payload: response.data
            });
        });
    } catch (error) {
        console.log("ERROR:", error);
    }
};
export default getProPlayers;
