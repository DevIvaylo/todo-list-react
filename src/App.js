import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css"
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: uuidv4(),
            item: '',
            editItem: false
        };
    }

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item
        };

        const updatedItems = [...this.state.items, newItem];
        if (newItem.title.length > 0) {
            this.setState({
                items: updatedItems,
                id: uuidv4(),
                item: '',
                editItem: false,
            }, () => console.log(this.state));
        }
    };

    clearList = () => {
        console.log('clear list')
    };

    handleDelete = (id) => {
        console.log('handleDelete')
    };

    handleEdit = (id) => {
        console.log('handleEdit');
    };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className='text-capitalize text-center'>todo input</h3>
                        <TodoInput item={this.state.item} handleChange={this.handleChange}
                                   handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
                        <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}
                                  handleEdit={this.handleEdit}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
