import React, { Component } from 'react';
import { connect } from 'react-redux';
import getRecentMatches from '../../../actions/getRecentMatches';
import UserMatches from "./ProfileMatches";
import getProfileData from '../../../actions/getProfileData';
import style from './Player.css'

class Player extends Component {
    componentDidMount() {
        this.props.getProfileData(this.props.location.state.data.account_id);
    }
   render() {
       return (
           <div style={style} className="user-head">
               <img src={this.props.profileData.profile.avatarfull} alt='Profile avatar'/>
               <h3>{this.props.profileData.profile.personaname}
                    <span className="user-country">{`[${this.props.profileData.profile.loccountrycode}]`}</span>
               </h3>
               <p>Estimate Rank: {this.props.profileData.mmr_estimate.estimate}</p>
               <p>Solo Competitive Rank: {
                   this.props.profileData.solo_competitive_rank !== null ? this.props.profileData.solo_competitive_rank : '¯\\_(ツ)_/¯'}
                   </p>
               <div>
                   Matches
                   <button onClick={() => this.props.getRecentMatches(this.props.profileData.profile.account_id)}>Matches history</button>
                   {this.props.recentMatches.map((item, index) => {
                       return (
                           <UserMatches key={index} data={item}/>
                       )
                   })}
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
export default connect(mapStateToProps, mapDispatchToProps)(Player);
