const initialState = {
    proMatches: []
};
const getProMatches = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRO_MATCHES':
            return {
                ...state,
                proMatches: action.payload,
            };
        default: return state
    }
};
export default getProMatches;
