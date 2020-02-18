import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Column from '../Column/Column';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Search />
                <Column title="Results">
                    <p>Helloooooo</p>
                </Column>
            </main>
        </div>
    );
 }
    
export default App;
