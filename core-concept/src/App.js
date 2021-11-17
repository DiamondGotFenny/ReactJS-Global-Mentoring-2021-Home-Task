import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import uniqueId from 'lodash/uniqueId';
import './App.css';
import TodoItems from './Components/TodoItems';

const appHeader = React.createElement('h1', null, 'My Todo List');

function App() {
  const ITEMS_LIST = 'itemsList';
  const itemsListIntial = JSON.parse(localStorage.getItem(ITEMS_LIST)) || [];
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
    localStorage.setItem(ITEMS_LIST, JSON.stringify(itemsList));
  }, [itemsList]);
  console.log(itemsList, ITEMS_LIST);
  return (
    <div className="App">
      {appHeader}
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
        <TodoItems
          itemsList={itemsList}
          onCheck={handleCompleteItem}
          onDelete={handleDeleteItem}
        />
      </div>
    </div>
  );
}

export default App;
