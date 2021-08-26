import React from 'react';
import './App.css';
import { Button } from './components';

function App() {
  return (
    <div className="App">
      <h1>Hellow World</h1>
      <h2>Hellow World</h2>
      <p>Hello World</p>
      <Button>button</Button>
      <Button btnType="primary">primary</Button>
      <Button btnType="danger">primary</Button>
      <Button btnType="link">link</Button>
      <Button size="large">large</Button>
      <Button size="small">small</Button>
    </div>
  );
}

export default App;
