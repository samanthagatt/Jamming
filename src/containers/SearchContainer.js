import React from 'react';
import Search from '../components/Search/Search';
import Spotify from '../utils/Spotify';

class SearchContainer extends React.Component {
    handleSearchTermChange(e) {
        this.props.onSearchTermChange(e.target.value);
    }
    handleSearch() {
        const textField = document.getElementById('search-term-input');
        Spotify.search(textField.value).then(searchResults => {
            this.props.onSearch(searchResults);
        });
    }
    handleInputOnClick() {
        // Makes sure redirect happens before search button is pressed
        Spotify.getAccessToken();
    }
    render() {
        return <Search searchTerm={this.props.searchTerm}
                    onSearchTermChange={this.handleSearchTermChange.bind(this)}
                    onSearch={this.handleSearch.bind(this)}
                    onInputClick={this.handleInputOnClick.bind(this)} />;
    }
 }
    
export default SearchContainer;