import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import uuid from "uuid/v4";
import "./ShoppingList.css";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons", id: uuid() },
        { name: "Bread", qty: "2 loaves", id: uuid() }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    let newItem = { ...item, id: uuid() };
    this.setState(state => ({
      items: [...state.items, newItem]
    }));
  }
  renderItems() {
    return (
      <ul className="ShoppingList-List">
        {this.state.items.map(item => (
          <li className="ShoppingList-ListItem" key={item.id}>
            <span>
              {item.name}
            </span>
            <p>
              {item.qty}
            </p> 
            
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="ShoppingList">
        <h1 className="ShoppingList-h1">Shopping List</h1>
        <div className="ShoppingList-content">
          <ShoppingListForm addItem={this.addItem} />
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
export default ShoppingList;
