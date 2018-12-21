import React from 'react';

const ProMatch = (props) => {
    return (
            <tr className="row100">
                <td className="column100 column1">{props.data.match_id}</td>
                <td className="column100 column2">{Math.ceil(parseInt(props.data.duration)/60)}min</td>
                <td className="column100 column3">{props.data.radiant_name !== null ? props.data.radiant_name : 'Team Radiant'}</td>
                <td className="column100 column4">{props.data.dire_name !== null ? props.data.dire_name : 'Team Dire'}</td>
                <td className="column100 column5">{props.data.league_name}</td>
                <td className="column100 column5">{props.data.radiant_win === true ?
                    (props.data.radiant_name !== null ? props.data.radiant_name : 'Team Radiant') :
                    (props.data.dire_name !== null ? props.data.dire_name : 'Team Dire')}</td>
            </tr>
    )
};
export default ProMatch;
