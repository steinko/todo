/* eslint-disable */
import React from 'react'

const TodoItem = props =>
/* eslint-enable */
  <li>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        {props.name}
      </label>
      <button className="destroy" />
    </div>
  </li>

export default props =>
  <ul className="todo-list">
    {props.todos.map(todo => <TodoItem key = {todo.id}{...todo} />)}
  </ul>
