import React from "react";
import { useState } from "react";

const ListManaging = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [checkedList, setCheckedList] = useState([]);

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const addToCompleted = (index) => {
    checkedList.push(list[index]);
    setCheckedList([...checkedList]);
    removeFromList(index);
  };

  const removeFromList = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const removeFromCheckedList = (index) => {
    checkedList.splice(index, 1);
    setCheckedList([...checkedList]);
  };
  return (
    <div className="container">
      <div>
        <input
          onChange={(e) => {
            setItem(e.target.value);
          }}
          placeholder="Write Item..."
        />
        <button onClick={addToList}>Add</button>
      </div>
      <div>
        <h2>List of All Tasks</h2>
        {list.length !== 0 ? (
          list.map((element, index) => {
            return (
              <ul key={index.toString()}>
                <li>
                  <input
                    className="liInput"
                    type="checkbox"
                    onChange={() => {
                      addToCompleted(index);
                    }}
                  />
                  {element}
                  <button onClick={() => removeFromList(index)}>Remove</button>
                </li>
              </ul>
            );
          })
        ) : (
          <ul></ul>
        )}
      </div>
      <div>
        <h2>List of Completed Tasks</h2>
        {checkedList.map((element, index) => {
          return (
            <ul key={index.toString()}>
              <li>
                {element}
                <button onClick={() => removeFromCheckedList(index)}>
                  Remove
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ListManaging;
