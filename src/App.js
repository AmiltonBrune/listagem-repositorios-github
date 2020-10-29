import { lazy } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { NotificationContainer } from 'react-notifications';

const ViewApp = lazy(() => import('./views/app'));
const ViewUser = lazy(() => import('./views/user'));

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/app' render={(props) => <ViewApp {...props} />} />
        <Route path='/login' render={(props) => <ViewUser {...props} />} />

        <Redirect to='/login' />
      </Switch>
      <NotificationContainer />
    </Router>
  );
}

export default App;
