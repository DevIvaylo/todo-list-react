import React, {Component} from 'react';
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleEdit, handleDelete} = this.props;
        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>todo list</h3>
                {items.map(item => <TodoItem key={item.id} id={item.id} title={item.title}
                                             handleEdit={handleEdit}
                                             handleDelete={handleDelete}/>)}
                <button type='button' disabled={!items.length > 0}
                        className='btn btn-danger btn-block text-uppercase mt-5'
                        onClick={clearList}>
                    clear list
                </button>
            </ul>
        );
    }
}
