import Home from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Home from '@pages/Home/index';
// import Party from '@pages/Party';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
