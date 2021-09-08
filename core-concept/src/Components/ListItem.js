import React from 'react';
import Button from 'react-bootstrap/Button';
import { RiCheckboxCircleLine, RiDeleteBin2Line } from 'react-icons/ri';

class ListItem extends React.PureComponent {
  render() {
    const { itemsList, onCheck, onDelete } = this.props;
    return (
      <ul className="todo-list">
        {itemsList.map((item) => (
          <li key={item.id} className="my-2">
            <span className={item.isComplete ? 'completed' : ''}>
              <span className="me-2">{item.value}</span>
              <span>{item.dateTime}</span>
            </span>
            <Button
              variant="outline-primary"
              className="mx-2"
              onClick={() => onCheck(item.id)}
            >
              <RiCheckboxCircleLine />
            </Button>
            <Button
              variant="outline-danger"
              className="mx-2"
              onClick={() => onDelete(item.id)}
            >
              <RiDeleteBin2Line />
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListItem;
