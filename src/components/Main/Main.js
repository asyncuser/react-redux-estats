import React, {Component} from 'react';
import Person from './Person';
import { connect } from 'react-redux';
import getData from '../actions/getData';
import updateSearch from '../actions/updateSearch';

class Main extends Component{
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    render() {
        return(
            <div>
                <div className="">
                    <input type="text" ref={this.input} onChange={this.props.updateSearch}/>
                </div>
                <button onClick={() => this.props.getData(this.props.searchData)}>GetData</button>
                <div className="users-list-container">
                    <ul>
                        <li>
                            {this.props.data.map((item, index) => {
                                return (
                                    <Person key={index} data={item} id={index}/>
                                )
                            })}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        searchData: state.searchData,
        data: state.data
    }
};
const mapDispatchToProps = dispatch => ({
    getData: (name) => dispatch(getData(name)),
    updateSearch: (event) => dispatch(updateSearch(event))
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
