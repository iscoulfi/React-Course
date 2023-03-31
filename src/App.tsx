import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './components/pages/Home/Home';
import AboutUs from './components/pages/AboutUs/AboutUs';
import NotFound from './components/pages/NotFound/NotFound';
import Forms from './components/pages/Forms/Forms';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="forms" element={<Forms />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
