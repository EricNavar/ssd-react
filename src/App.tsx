import React from 'react';
import './App.css';

function App() {
  const link: string = process.env.REACT_APP_VIDEO!;
  return (
    <div style={{textAlign:'center'}}>
      <p className="augh">
        Kent Fucks Lovers Blog
      </p>
      <video controls autoPlay={true}>
        <source src={link} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
