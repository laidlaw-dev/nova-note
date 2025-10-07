import { useState, useEffect } from 'react';
import './App.css';
import { helloWorld } from './api/hello-world';

function App() {
  const [message, setMessage] = useState('waiting...');

  useEffect(() => {
    helloWorld()
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
