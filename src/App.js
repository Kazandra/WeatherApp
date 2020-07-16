import React from 'react';
const api = {
  key: "923cacccb6c3bc53838fb85e48716356",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="type"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>

    </div>
  );
}

export default App;
