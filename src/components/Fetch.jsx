import React , { useEffect, useState} from 'react'
import axios from 'axios';
export default function Fetch() {
  const [persons, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData((persons) => res.data);
    });
  }, []);
  
  return (
    <ul>
      {persons.map((person) => (
        <li className='noice' key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}