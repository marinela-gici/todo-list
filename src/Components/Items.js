import React, { useState } from "react";
import style from "./style.css"

const Items = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const onButtonClick = (e) => {
        e.preventDefault();
        if(input) {
            // var item = {value: input};
            setItems((previousValue) => [...previousValue, {label:input, checked: false}]);
            setInput("");
        }
    }

    const checkItem = (index) => {
        
        // find item = items[index] element
        if(typeof items[index] === 'undefined') {
            return;
        } 
        let item = items[index];
        item.checked = !item.checked;
        setItems((previousItems) => {
            previousItems[index] = item;
            return [...previousItems];
        })    
    }

    const removeItem = (index) => {
        setItems((previousItems) => {
            return previousItems.filter((item, itemIndex) => itemIndex !== index);
        })
    }
    return (
        <>
            <div className="input-field">
                <input type="text" value={input} placeholder="Add item" onChange={(e) => setInput(e.target.value)} />
                <button onClick={onButtonClick}>Add</button>
            </div>
            <ul className="list">
            {
                items.length > 0 && 
                items.map((item, index) => {
                    return (
                        <li key={index}>
                            <label className={item.checked ? "line-through" : ""}>{item.label}
                                <input type="checkbox" checked={item.checked} onChange={() => checkItem(index)}/>
                            </label>
                            <button onClick={() => removeItem(index)} className="delete-btn">Delete</button>
                        </li>
                    );
                })
            }
            </ul>
            
        
        </>
    )
}

export default Items;