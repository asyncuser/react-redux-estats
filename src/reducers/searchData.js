const initialState = {
    searchData: []
};
const searchData = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH':
            return {
                ...state,
                searchData: action.payload
            };
        default: return state
    }
};
export default searchData;
