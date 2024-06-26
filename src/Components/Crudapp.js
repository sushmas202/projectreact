import axios from "axios";

const API_BASE_URL ='https://jsonplaceholder.typicode.com/todos';

export const fetchItems = async() =>{
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const createItem = async (text) =>{
    const response = await axios.post(API_BASE_URL,
    {
        title: text,
        completed: false,
    });
        return response.data;
};

export const updateItem = async(id, newText) =>{
    const response = await axios.put(`${API_BASE_URL}`/`${id}`,{
        id,
        title: newText,
        completed: false,
    });
    return response.data;
};

export const deleteItem = async(id) =>{
    const response = await axios.delete(`${API_BASE_URL}`/`${id}`);
    return response.data;
};