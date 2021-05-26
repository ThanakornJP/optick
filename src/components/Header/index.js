import React, {Component} from 'react';

export default class Header extends React.Component {
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}