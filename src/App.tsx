import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
