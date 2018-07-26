import React, { Component } from 'react';
import Menu from './components/Menu';
import Content from './components/Content';

const App = (props) => {
    return (
        <div className="container">
            <Menu />
            <Content />
        </div>
    )
}

export default App;