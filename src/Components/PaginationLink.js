import React, {Component} from 'react';

class PaginationLink extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        this.props.onClick(this.props.range);
        e.preventDefault();
    }
    
    render() {
        return <li><a onClick={this.handleClick} href="#">{this.props.value}</a></li>
        
    }
}

export default PaginationLink;