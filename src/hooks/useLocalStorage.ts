import {useState} from "react";

export const useLocalStorage = (key, value) => {
    const [state, setState] = useState(()=> {
        const item = localStorage.getItem(key);
        return item ? item : value;
    })
    const updateItem = (el) => {
        setState(el)
        localStorage.setItem(key, el)
    }
    return [state, updateItem]
}