import './App.css';

function App() {
  return (
    <div className="augh">
      Kent Fucks Lovers Blog

      <video width="400" controls>
        <source src={process.env.REACT_APP_VIDEO} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
