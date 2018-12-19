const initialState = {
    recentMatches: []
};
const getRecentMatches = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECENT_MATCHES':
            return {
                ...state,
                recentMatches: action.payload,
            };
        default: return state
    }
};
export default getRecentMatches;
