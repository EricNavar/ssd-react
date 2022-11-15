import './App.css';

function App() {
  console.log(process.env);
  return (
    <div style={{textAlign:'center'}}>
      <p className="augh">
        Kent Fucks Lovers Blog
      </p>
      <video controls autoPlay={true}>
        <source src={process.env.REACT_APP_VIDEO} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
