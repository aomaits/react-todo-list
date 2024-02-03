import React, { useState } from 'react'

function TodoForm(props) {
  // set initial input to empty
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  //prevent page refresh on the form
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      // create random id
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    // after user submits, empty input form
    setInput('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a todo'
        value={input} 
        name='text'
        className='todo-input'
        onChange={handleChange}
      />
      <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm