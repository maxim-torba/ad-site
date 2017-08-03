import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import EditForm from './EditForm';
import HomeLink from './HomeLink';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            id: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(e) {
        const value = e.target.value;
        const name = e.target.name;
        
        this.setState({
            [name]: value
        });
    }
    
    getMaxAdsId(ads) {
        const re = /\d+/;
        let maxAdsId = 0;
        ads.forEach(function (ad) {
            let id = ad.id.match(re)[0];
            id > maxAdsId ? (maxAdsId = id) : null;
        });
        return maxAdsId;
    }
    
    handleSubmit(e) {
        const title = this.state.title;
        const description = this.state.description;
        
        if (title !== '' && description !== '') {
            let ads = JSON.parse(localStorage.getItem('ads')) || [];
            let maxAdsId = parseInt(this.getMaxAdsId(ads), 10);
            let newId = maxAdsId + 1;
            
            ads.push({
                id: 'ad' + newId,
                author: this.props.userName,
                created_at: new Date().toLocaleString(),
                title: title,
                description: description
            });
            
            localStorage.setItem('ads', JSON.stringify(ads));
            
            this.setState({
                id: 'ad' + newId
            });
        } else {
            alert('All fields should be filled in!');
        }
        e.preventDefault();
    }
    
    render() {
        const id = this.state.id;
        return (
            id ? <Redirect to={id}/> :
                (<div>
                    <EditForm onSubmit={this.handleSubmit}
                              onInput={this.handleInput}
                              title={this.state.title}
                              description={this.state.description}
                              btnValue="Create"/>
                    <HomeLink/>
                </div>)
        )
    }
}

export default Create;