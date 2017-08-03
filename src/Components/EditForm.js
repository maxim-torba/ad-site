import React from 'react';

function EditForm(props) {
    return (
        <form onSubmit={props.onSubmit}
              className="edit-form">
            <div className="form-group">
                <input name="title"
                       type="text"
                       className="form-control"
                       autoFocus
                       placeholder="title"
                       value={props.title}
                       onChange={props.onInput}/>
                <textarea name="description"
                          className="form-control"
                          placeholder="description"
                          value={props.description}
                          onChange={props.onInput}/>
                <input type="submit"
                       className="btn btn-default"
                       value={props.btnValue}/>
            </div>
        </form>)
}

export default EditForm;