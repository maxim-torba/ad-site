import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Delete from './Delete';

class Ad extends Component {
    render() {
        const id = this.props.id;
        return (
            <div className="list-group-item">
                {this.props.withLink ?
                    <Link to={id}>
                        <h3 className="list-group-item-heading">{this.props.title}</h3>
                    </Link> :
                    <h3 className="list-group-item-heading">{this.props.title}</h3>}
                <span>{this.props.author} </span>
                <data>({this.props.created_at})</data>
                <p className="list-group-item-text description">{this.props.description}</p>
                {localStorage.authorizedUser === this.props.author ?
                    <div>
                        <Delete id={id}/>
                        <Link to={'/edit/' + id}
                              className="btn btn-default btn-xs">Edit</Link>
                    </div> : null}
            </div>
        )
    }
}

export default Ad;