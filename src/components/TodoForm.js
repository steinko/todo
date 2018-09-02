/* eslint-disable */
import React from 'react'
/* eslint-enable */

export default props =>
  <form onSubmit = {props.handleTodoSubmit} >
    <input
      type='text'
      autoFocus
      value= {props.currentTodo}
      onChange= {props.handleNewToolChange}
      className="new-todo"
      placeholder="What needs to be done?"/>
  </form>
