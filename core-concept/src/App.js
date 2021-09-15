import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import uniqueId from 'lodash/uniqueId';
import ListItem from './Components/ListItem';

function App() {
  const itemsListIntial = JSON.parse(localStorage.getItem('itemsList')) || [];
  const [itemsList, setItemsList] = useState(itemsListIntial);

  const [inputVal, setInputVal] = useState('');

  const handleAddItem = () => {
    if (inputVal === '') {
      return;
    }

    const newItem = {
      id: uniqueId() + Date.now(),
      value: inputVal,
      isComplete: false,
      dateTime: new Date().toLocaleString(),
    };

    setItemsList([...itemsList, newItem]);
    setInputVal('');
  };

  const handleDeleteItem = (id) => {
    const newItemsList = itemsList.filter((item) => item.id !== id);
    setItemsList(newItemsList);
  };

  const handleCompleteItem = (id) => {
    const newItemsList = itemsList.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItemsList(newItemsList);
  };

  useEffect(() => {
    localStorage.setItem('itemsList', JSON.stringify(itemsList));
  }, [itemsList]);
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className="container">
        <InputGroup className="inputGroup">
          <Button id="addItemBtn" onClick={handleAddItem}>
            +
          </Button>
          <FormControl
            type="text"
            placeholder="Enter Your To-Do Item Here"
            aria-label="Input to-do item"
            aria-describedby="addItemBtn"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </InputGroup>
        <ListItem
          itemsList={itemsList}
          onCheck={handleCompleteItem}
          onDelete={handleDeleteItem}
        />
      </div>
    </div>
  );
}

export default App;
