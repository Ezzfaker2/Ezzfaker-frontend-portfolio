import {useState} from "react";

export const useLocalStorage = (key: string, value: string): [state: string, updateItem: (el: string) => void] => {


  const [state, setState] = useState<string>(() => {
    const item = localStorage.getItem(key);
    return item ? item : value;
  })


  const updateItem = (el: string) => {
    setState(el)
    localStorage.setItem(key, el)
  }


  return [state, updateItem]
}