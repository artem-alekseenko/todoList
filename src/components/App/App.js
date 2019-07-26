import React, { Component } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SearchPanel'
import TodoList from '../TodoList/TodoList'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import ItemAddForm from '../ItemAddForm/ItemAddForm'

import './App.css'


export default class App extends Component {

    maxId = 0

    constructor() {
        super()
        this.state = {
            todoData: [
                this.createItem("Learn React"),
                this.createItem("Find Job"),
                this.createItem("Drink Coffee")
            ]
        }
    }
    createItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
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

    addItem = (text) => {
        const newItem = this.createItem(text)

        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem]
            return {
                todoData: newArray
            }
        })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx]
        const newItem = { ...oldItem, [propName]: !oldItem[propName] }
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    toggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    toggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    render() {

        const doneTaskCount = this.state.todoData.filter((task) => task.done).length

        const todoTaskCount = this.state.todoData.length - doneTaskCount

        return (
            <div className="App" >
                <AppHeader toDo={todoTaskCount} done={doneTaskCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleletItem}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone} />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        )
    }
}