import { Router, Route, Switch } from 'wouter';
import { ROLES } from '../../constants';
import { StartupForm } from './form';
import { SuccessForm } from './success-form';

export function StartupRouter () {
    return <Router base={`/${ROLES.startup}`}>
        <Switch>
            <Route path='/' component={StartupForm} />
            <Route path='/success-send' component={SuccessForm} />
        </Switch>
    </Router>;
}

