import { Suspense, lazy } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import AppLayout from '../../layout/AppLayout';

const MyRepositories = lazy(() => import('./MyRepositories'));
const Following = lazy(() => import('./Following'));
const Followers = lazy(() => import('./Followers'));

function App({ match }) {
  return (
    <AppLayout>
      <Suspense>
        <Switch>
          <Redirect
            exact
            from={`${match.url}/`}
            to={`${match.url}/repositorios`}
          />
          <Route
            path={`${match.url}/repositorios`}
            render={(props) => <MyRepositories {...props} />}
          />

          <Route
            path={`${match.url}/seguindo`}
            render={(props) => <Following {...props} />}
          />

          <Route
            path={`${match.url}/seguidores`}
            render={(props) => <Followers {...props} />}
          />
        </Switch>
      </Suspense>
    </AppLayout>
  );
}

export default withRouter(App);
