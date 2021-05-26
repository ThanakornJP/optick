import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/index.jsx';
import Content from './components/Content/index.jsx';

import './styles.scss';

const Index = () => {
    //return <div>Welcome to App</div>;
    return (
        <div className="container">
            <Header name="cz" />
            <Content name="cz" />
        </div>
    );
};
ReactDOM.render(<Index />, document.getElementById('app'));