import axios from 'axios';
import { useState } from 'react';

export default function PingPong() {
  const [data, setData] = useState('ping');
  const onClick = () => {
    axios.get('/ping').then((response) => {
      setData(response.data);
      console.log('pingpongpongpongpongpong');
    });
  };
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#00b894] text-white"
    >
      {data}
    </button>
  );
}
