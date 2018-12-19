const updateSearch = (props) => dispatch => {
        dispatch ({
            type: 'UPDATE_SEARCH',
            payload: props.target.value
        });
};
export default updateSearch;
