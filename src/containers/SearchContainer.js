import React from 'react';
import Search from '../components/Search/Search';

const SPOTIFY_ACCOUNT_URL = 'https://accounts.spotify.com/authorize';

class SearchContainer extends React.Component {
    handleSearchTermChange(e) {
        this.props.onSearchTermChange(e.target.value);
    }
    render() {
        return <Search isLoggedIn={this.props.isLoggedIn}
                    searchTerm={this.props.searchTerm}
                    onSearchTermChange={this.handleSearchTermChange.bind(this)} />;
    }
 }
    
export default SearchContainer;