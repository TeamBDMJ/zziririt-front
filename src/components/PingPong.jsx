import axios from 'axios';
import { useState } from 'react';

export default function PingPong() {
  const [data, setData] = useState('ping');
  const onClick = () => {
    axios.get('/ping').then((response) => {
      setData(response.data);
    });
  };
  return (
    <button onClick={onClick} className="btn btn-primary text-white">
      {data}
    </button>
  );
}
