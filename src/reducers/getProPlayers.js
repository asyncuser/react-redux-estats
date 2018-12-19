const initialState = {
    proPlayers: []
};
const getProPlayers = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRO_PLAYERS':
            return {
                ...state,
                proPlayers: action.payload,
            };
        default: return state
    }
};
export default getProPlayers;
