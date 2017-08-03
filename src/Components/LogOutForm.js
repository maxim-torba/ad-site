import React from 'react';

function LogOutForm(props) {
    return (
        <div>
            <p className="navbar-text">
                <span className="user-name">{props.userName}</span>
            </p>
            <button className="btn btn-default navbar-btn"
                    onClick={props.logout}>LogOut
            </button>
        </div>
    )
}

export default LogOutForm;