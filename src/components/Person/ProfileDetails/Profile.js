import React, { Component } from 'react';
import { connect } from 'react-redux';
import getRecentMatches from '../../../actions/getRecentMatches';
import UserMatches from "./ProfileMatches";
import getProfileData from '../../../actions/getProfileData';
import style from './Player.css'
import Zoom from 'react-reveal/Zoom';

class Profile extends Component {
    componentDidMount() {
        this.props.getProfileData(this.props.location.state.data.account_id);
        this.props.getRecentMatches(this.props.location.state.data.account_id)
    }
   render() {
       const profileData = this.props.profileData.profileData;
       return (
               <div style={style} className="user-head">
                   <img src={profileData.profile.avatarfull} alt='Profile avatar'/>
                   <h3>{profileData.profile.personaname}
                       <span className="user-country">{`[${profileData.profile.loccountrycode !== null ?
                           profileData.profile.loccountrycode : 'X'}]`}</span>
                   </h3>
                   <p>Estimate Rank: {profileData.mmr_estimate.estimate}</p>
                   <p>Solo Competitive Rank: {
                       profileData.solo_competitive_rank !== null ? profileData.solo_competitive_rank : '¯\\_(ツ)_/¯'}
                   </p>
                   <div>
                       <h4>Recent matches</h4>
                       <table className="profile-table table-container">
                           <thead className="table-head">
                           <tr>
                               <th>MatchId</th>
                               <th>Duration</th>
                               <th>Kills/Deaths/Assists</th>
                               <th>GPM/XPM</th>
                               <th>Hero damage</th>
                               <th>Last hits</th>
                           </tr>
                           </thead>
                           <Zoom>
                           <tbody className="table-body">
                           {this.props.recentMatches.recentMatches.map((item, index) => {
                               return (
                                   <UserMatches key={index} data={item}/>
                               )
                           })}
                           </tbody>
                           </Zoom>
                       </table>
                   </div>
               </div>
       )
   }
}
const mapStateToProps = state => {
    return {
        recentMatches: state.recentMatches,
        profileData: state.profileData
    }
};
const mapDispatchToProps = dispatch => ({
    getRecentMatches: (steamId) => dispatch(getRecentMatches(steamId)),
    getProfileData: (steamId) => dispatch(getProfileData(steamId))
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
