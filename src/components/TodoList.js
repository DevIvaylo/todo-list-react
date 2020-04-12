import React, {Component} from 'react';
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        return (
            <h1>Todo list
                <h2><TodoItem/></h2>
            </h1>
        );
    }
}
