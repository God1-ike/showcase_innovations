import { Switch, Router, Route } from 'wouter';
import { Welcome } from './pages/welcome';
import { StartupRouter } from './pages/startup/router';
import { CustomerRouter } from './pages/customer/router';
import { ManagerRouter } from './pages/manager/router';
import { ROLES } from './constants';
import { useRedirectByRole } from './hooks/redirect-by-role';

function App() {
  useRedirectByRole();
  return (
    <Switch>
      <Route path='/' component={Welcome} />
      <StartupRouter />
      <Router base={`/${ROLES.startup}`} component={Welcome} />
      <Router base={`/${ROLES.manager}`} component={ManagerRouter} />
      <Router base={`/${ROLES.customer}`} component={CustomerRouter} />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}

export default App;
