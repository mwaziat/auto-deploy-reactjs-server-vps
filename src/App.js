import logo from './logo.svg';
import './App.css';

function App() {
  const reloadPage = () =>{
    alert("Say Hay")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload testing proses.
          <br/>
          coba docker
          <h1>Welcome Devops, This testing 103</h1>
          <button onSubmit={reloadPage} >Reload</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
