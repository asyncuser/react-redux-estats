const initialState = {
    profileData: {
        mmr_estimate:{},
        profile: {}
    }
};
const getProfileData = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE_DATA':
            return {
                ...state,
                profileData: action.payload
            };
        default: return state
    }
};
export default getProfileData;
