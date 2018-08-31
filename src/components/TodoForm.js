import React from 'react'

export default props  =>
  <form>
    <input
      type='text'
      autoFocus
      value= {props.currentTodo}
      onChange= {props.handleNewToolChange}
      className="new-todo"
      placeholder="What needs to be done?"/>
  </form>
