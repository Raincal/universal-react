/**
 * Created by Yujia on 2015/12/14.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AppComponent extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to my app</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}