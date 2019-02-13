import React from 'react';

export default function TodoList(props) {
  return (
    <div>
      {
        props.tasks.map((task, id) => (
          <div key={id}>{task.message}</div>
        ))
      }
    </div>
  )
}

