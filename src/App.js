import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {

  const [sneaker, setSneaker] = useState({});

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/Sneakers/top.json?t=day`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      setSneaker( {posts} );
    });
  }, [])

  return (
    <div>
    <h1>Sneaker Talk</h1>
      <ul>
        {sneaker?.posts && sneaker.posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
