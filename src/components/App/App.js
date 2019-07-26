import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../TodoList/TodoList'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'

import './App.css'

const App = () => {

    const todoData = [
        {
            id: 1,
            label: "Learn React",
            important: true
        },
        {
            id: 2,
            label: "Find job",
            important: false
        },
        {
            id: 3,
            label: "Drink coffee",
            important: false
        }
    ]

    return (
        <div className="App">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList
                todos={todoData}
                onDeleted={(id) => console.log('del', id)} />
        </div>
    )
}

export default App