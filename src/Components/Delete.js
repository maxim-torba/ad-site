import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        const id = this.props.id;
        let ads = JSON.parse(localStorage.getItem('ads'));
        ads.forEach((e, i) => (e.id === id ? ads.splice(i, 1) : null));
        localStorage.setItem('ads', JSON.stringify(ads));
        this.setState({isDeleted: true});
    }
    
    render() {
        const isDeleted = this.state.isDeleted;
        return (
            <div className="delete-bnt-wrapper">
                {isDeleted ? <Redirect to="/"/> :
                    <button className="btn btn-danger btn-xs"
                            onClick={this.handleClick}>Delete</button>}
            </div>
        )
    }
}

export default Delete;