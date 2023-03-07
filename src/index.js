import React, { Suspense , lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import "./language/i18next";
import Loader from './components/loader/Loader';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
       <App />
      </Suspense>
    </BrowserRouter>
);

