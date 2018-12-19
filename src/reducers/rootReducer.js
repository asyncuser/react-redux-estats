import { combineReducers } from 'redux';
import searchData from './searchData';
import proPlayers from './getProPlayers';
import getData from './getData';
import profileData from './getProfileData';
import recentMatches from './getRecentMatchesData';
import proMatches from './getProMatches';

const rootReducer = combineReducers({
    searchData: searchData,
    proPlayers: proPlayers,
    data: getData,
    profileData: profileData,
    recentMatches: recentMatches,
    proMatches: proMatches
});
export default rootReducer;
