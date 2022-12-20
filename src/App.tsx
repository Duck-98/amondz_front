import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from './components/atoms/Wrapper';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import AddItemPage from './pages/AddItemPage';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/detail:/id" element={<DetailPage />}></Route>
        <Route path="/add" element={<AddItemPage />}></Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
