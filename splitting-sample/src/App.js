import React from 'react';

function App() {
  const onClick = () => {
    import ('./notify').then(result => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
