import {
  lazy,
  Suspense,
} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import type { TComponentProps } from '../../definitions';

export type TProps = TComponentProps & {};

const Text = lazy(() => <div>Text</div>);

export const Router: React.FC<TProps> = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact component={} path="/" />
          <Route component={SelectCity} path="/select-city" />
          <Route component={CityPage} path="/:city" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Router;
