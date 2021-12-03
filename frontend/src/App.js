import { Switch, Route } from 'wouter';
import { Welcome } from './pages/welcome';
import { StartupRouter } from './pages/startup/router';
import { CustomerRouter } from './pages/customer/router';
import { ManagerRouter } from './pages/manager/router';
import { useRedirectByRole } from './hooks/redirect-by-role';

import { StartupForm } from './pages/startup/form';
import { SuccessForm } from './pages/startup/success-form';

function App() {
  useRedirectByRole();
  return (
    <Switch>
      <Route path='/' component={Welcome} />
      <Route path='/startup' component={StartupForm} />
      <Route path='/startup/success-send' component={SuccessForm} />
      {CustomerRouter}
      <Route base='/manager' component={ManagerRouter}></Route>
    </Switch>
  );
}

export default App;
