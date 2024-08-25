import Member from 'pages/member';
import Party from 'pages/party';
import Restaurant from 'pages/restaurant';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import Home from '@pages/Home/index';
// import Party from '@pages/Party';

function App() {
  // 로그인 상태 확인

  return (
    <Routes>
      <Route path="/" element={<Member />} />
      <Route path="/member" element={<Member />} />
      <Route path="/party" element={<Party />} />
      <Route path="/restaurant" element={<Restaurant />} />
    </Routes>
  );
}

export default App;
