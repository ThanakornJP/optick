import React, {Component} from 'react';

export default class Content extends React.Component {
    render(){
        return <h6>Content for {this.props.name}</h6>;
    }
}