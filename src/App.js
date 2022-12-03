// import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="property" element={<PropertyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
