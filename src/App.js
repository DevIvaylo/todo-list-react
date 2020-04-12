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
            items: [
                {id: 1, title: 'wake up'},
                {id: 2, title: 'make breakfast'}
            ],
            id: uuidv4(),
            item: '',
            editItem: false
        };
    }

    handleChange = (event) => {
        console.log('handleChange');
    };
    handleSubmit = () => {
        console.log('handleSubmit');
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
        console.log(this.state);

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
