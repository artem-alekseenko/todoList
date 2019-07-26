import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'

import './TodoList.css'

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                />
            </li>
        )
    })

    return (
        <ul className="list-group TodoList">
            {elements}
        </ul>
    )
}

export default TodoList