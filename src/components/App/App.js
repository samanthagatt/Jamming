import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Search />
            </main>
        </div>
    );
 }
    
export default App;
