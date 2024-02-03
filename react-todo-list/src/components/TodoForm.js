import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  // set initial input to empty
  const [input, setInput] = useState('');
  const [idNumber, setIdNumber] = useState(1);
  // set initial input reference to null 
  const inputRef = useRef(null);

  //useEffect hook is going to automatically focus on current input field
  useEffect(() => {
    inputRef.current.focus();
  })
  
  const handleChange = e => {
    setInput(e.target.value);
  }
  
  //prevent page refresh on the form
  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      // id: Math.floor(Math.random() * 10000),
      id: idNumber,
      text: input
    });
    
    
    //idNumber incrementally increases
    setIdNumber(prevState => ( prevState + 1));
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
        ref={inputRef}
      />
      <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm