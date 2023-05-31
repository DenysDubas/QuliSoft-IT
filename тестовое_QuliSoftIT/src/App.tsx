import { Route, Routes } from 'react-router-dom';
import { Gallery } from './components/Gallery';
import { Photo } from './components/Photo';
import './App.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/photos/:id" element={<Photo />} />
    </Routes>
  );
};
