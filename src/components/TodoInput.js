import React, {Component} from 'react';

export default class TodoInput extends Component {
    render() {
        const {item, editItem, handleChange, handleSubmit} = this.props;
        return (
            <>
                <div className='card card-body my-3'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary">
                                    <i className="fas fa-book"/>
                                </div>
                            </div>
                            <input name='item' value={item} onChange={handleChange} placeholder='add todo item'
                                   className='form-control text-capitalize' type="text"/>
                        </div>
                        <button type='submit' disabled={!item.length > 0}
                                className={editItem ? 'btn btn-block btn-success mt-3 text-capitalize' : 'btn btn-block btn-primary mt-3 text-capitalize'}>
                            {editItem ? 'edit item' : 'add item'}
                        </button>
                    </form>
                </div>
            </>
        );
    }
}
