import React, {Component} from 'react';

class AuthorizationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        const name = this.state.userName;
        const password = this.state.password;
        
        if (name !== '' && password !== '') {
            this.props.onAuthorization(name, password);
        } else {
            alert('All fields should be filled in!');
        }
        
        e.preventDefault();
    }
    
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}
                      className="navbar-form navbar-top">
                    <input className="input-user-name form-control"
                           name="userName"
                           type="text"
                           placeholder="name"
                           autoFocus
                           value={this.state.userName}
                           onChange={this.handleChange}/>
                    <input className="input-password form-control"
                           name="password"
                           type="password"
                           placeholder="password"
                           value={this.state.password}
                           onChange={this.handleChange}/>
                    <input type="submit" value="Entering/Registration"
                           className="btn btn-default"/>
                </form>
            </div>
        )
    }
}

export default AuthorizationForm;