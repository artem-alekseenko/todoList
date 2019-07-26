import React from 'react'

import './TodoListItem.css'

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, important, done }) => {

    let classNames = 'TodoListItem'

    if (done) {
        classNames += ' done'
    }

    if (important) {
        classNames += ' important'
    }

    return (
        < span className={classNames} >
            <span
                className="TodoListItem-Label"
                onClick={onToggleDone}
            >
                {label}
            </span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}
            >
                <i className="fa fa-exclamation" />
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}
            >
                <i className="fa fa-trash-o" />
            </button>
        </span >
    )
}

export default TodoListItem