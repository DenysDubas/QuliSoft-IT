import { Route, Routes } from 'react-router-dom';
import { Gallery } from './components/Gallery/Gallery';
import { Photos } from './components/Photo';
import './App.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/photos/:id" element={<Photos />} />
    </Routes>
  );
};
