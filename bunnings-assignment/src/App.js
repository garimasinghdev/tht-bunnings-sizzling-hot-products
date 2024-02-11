import logo from './logo.svg';
import './App.css';
import React from 'react';
import FilesUpload from './filesUpload';

function App() {
  document.title = 'Bunnings App';
  return (
    <div>
      <h1>🔨🔨 Bunnings Sizzling-Hot 🔥 Products</h1>
      <div>
        <FilesUpload></FilesUpload>
      </div>
    </div>
  );
}

export default App;
