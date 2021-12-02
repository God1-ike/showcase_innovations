import { Switch, Router, Route } from 'wouter';
import { Welcome } from './pages/welcome';
import { StartupRouter } from './pages/startup/router';
import { ROLES } from './constants';
import { useRedirectByRole } from './hooks/redirect-by-role';

function App() {
  useRedirectByRole();
  return (
    <Switch>
      <Route path='/' component={Welcome} />
      <StartupRouter />
      <Router base={`/${ROLES.startup}`} component={Welcome} />
      <Router base={`/${ROLES.manager}`} component={Welcome} />
      <Router base={`/${ROLES.customer}`} component={Welcome} />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}

export default App;
