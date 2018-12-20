import React from 'react';

const ProfileMatches = ( props ) => {
    return (
        <tr>
            <td>{props.data.match_id}</td>
            <td>{Math.ceil(parseInt(props.data.duration)/60)}min</td>
            <td>{`${props.data.kills} / ${props.data.deaths} / ${props.data.assists}`}</td>
            <td>{`${props.data.gold_per_min} / ${props.data.xp_per_min}`}</td>
            <td>{props.data.hero_damage}</td>
            <td>{props.data.last_hits}</td>
        </tr>
    )
};
export default ProfileMatches;
