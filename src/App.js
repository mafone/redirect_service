import './App.css';

function App() {

  window.location.href = 'https://eleicoesjustas.org';
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + "/logo192.png"} className="App-logo" alt="   Eleições Justas" />
        <a
          className="App-link"
          href="https://eleicoesjustas.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eleições Justas
        </a>
      </header>
    </div>
  );
}

export default App;
