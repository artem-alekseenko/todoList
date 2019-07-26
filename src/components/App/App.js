import React, { Component } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../TodoList/TodoList'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'

import './App.css'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            todoData: [
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
        }
    }

    deleletItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newTodoData
            }
        })
    }

    render() {
        return (
            <div className="App" >
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleletItem} />
            </div>
        )
    }
}