import React from 'react';
import './App.css';
import IssueList from './components/IssueList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
      </header>
      <div className="IssueListOriginal">
        <IssueList />
      </div>
    </div>
  );
}

export default App;
