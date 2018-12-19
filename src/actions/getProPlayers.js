import axios from 'axios';
import api from '../api/Api-configuration';

const getProPlayers = () => dispatch => {
    const url = api.proPlayersUrl;
    axios.get(url).then(response => {
        console.log('reposnse:', response)
        dispatch ({
            type: 'GET_PRO_PLAYERS',
            payload: response.data
        });
    });
};
export default getProPlayers;
