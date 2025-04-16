import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-title">CV Builder</div>
      <div className="app-container">
        <div id="left-button-row">
          <button className="app-btn">General Information</button>
          <button className="app-btn">Education Experience</button>
          <button className="app-btn">Practical Experience</button>
        </div>
        <div id="right-button-row"></div>
        <div id="left-card-row">
          <div id="left-card">

          </div>
        </div>
        <div id="right-card-row">
          <div id="right-card">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;