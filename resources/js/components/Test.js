import React from 'react';
import ReactDOM from 'react-dom';

function Test() {
    return <h1>React!</h1>;
}
/*
Test = () => {
    return "<h1>Hello React!</h1>";
    }
*/
if (document.getElementById('test')) {
    ReactDOM.render(<Test />, document.getElementById('test'));
}
