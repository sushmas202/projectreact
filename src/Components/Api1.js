import React,{ useState,useEffect} from "react";
import {fetchItems,createItem,updateItem,deleteItem} from './Crudapp';

const CrudApp = () =>{
    const [items,setItems] = useState([]);
    const [text,setText] = useState('');

    useEffect(() =>{
        const fetchData = async()=>{
            const data = await fetchItems();
            setItems(data);
        };
        fetchData();
    },[]);

    const handleInputChange = (e) =>{
        setText(e.target.value);
    };

    const handleAddItem = async() => {
        if (text.trim() !== ''){
            const newItem = await createItem(text);
            setItems([...items,newItem]);
            setText('');
        }
    };

    const handleEditItem = async(id,newText) =>{
        console.log(id);
        const updatedItem = await updateItem(id,newText);
        const updatedItems = items.map((item) =>
                item.id === id? updatedItem : item
    );
    setItems(updatedItems);
    };

    const handleDeleteItem = async(id) =>{
        await deleteItem(id);
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <div>
            <h1>CRUD APP</h1>
            <input
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="Enter item"
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item) =>(
                    <li key={item.id}>
                        <input 
                        type="text"
                        value={item.title}
                        onChange={(e) => handleEditItem(item.id,e.target.value)}
                        />
                        <button onClick={() =>handleDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CrudApp;