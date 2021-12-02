import { Router, Route, Switch, Redirect } from 'wouter';
import { ROLES } from '../../constants';
import { StartupForm } from './form';

export function StartupRouter () {
    return <Router base={`/${ROLES.startup}`}>
        <Switch>
            <Route path='/' component={StartupForm} />
        </Switch>
    </Router>;
}

