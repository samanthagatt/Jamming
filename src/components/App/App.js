import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import ResultsAndPlaylist from '../ResultsAndPlaylist/ResultsAndPlaylist';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Search />
                <ResultsAndPlaylist />
            </main>
        </div>
    );
 }
    
export default App;
