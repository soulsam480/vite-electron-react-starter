import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Home from '/@/components/Home';
import AppNavigation from '/@/components/AppNavigation';
// Lazy load component
const About = React.lazy(() => import('/@/components/About'));

const App: React.FC = () => {
  return (
    <>
      <img
        alt="Vue logo"
        src="../assets/logo.svg"
        width="300"
      />
      <BrowserRouter>
        <AppNavigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          } />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
