import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-notifications/lib/notifications.css';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<div className='loading' />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
