import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css"
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
    return (
        <div className="App">
            <h1>hello from app</h1>
            <TodoInput/>
            <TodoList/>
        </div>
    );
}

export default App;
