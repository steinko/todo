/* eslint-disable */
import { Component } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import { saveTodo } from '../lib/service'
/* eslint-enable */

export default class TodoApp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentTodo: '',
      todos: []
    }
    this.handleNewToolChange = this.handleNewToolChange.bind(this)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
  }

  handleNewToolChange (evt) {
    this.setState({ currentTodo: evt.target.value })
  }

  handleTodoSubmit (evt) {
    evt.preventDefault()
    const newTodo = { name: this.state.currentTodo, isComplete: false }
    saveTodo(newTodo)
      .then(({ data }) => this.setState({
        todos: this.state.todos.concat(data),
        currentTodo: ''
      }))
      .catch(() => this.setState({ error: true }))
  }

  render () {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            {this.state.error ? <span className= 'error'>Oh no!</span> : null}
            <TodoForm
              currentTodo={this.state.currentTodo}
              handleNewToolChange= {this.handleNewToolChange }
              handleTodoSubmit = {this.handleTodoSubmit }/>
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}
