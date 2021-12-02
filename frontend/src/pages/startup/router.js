import { Router, Route, Switch, Redirect } from 'wouter';
import { ROLES } from '../../constants';
import { Form } from './form';

export function StartupRouter () {
    return <Router base={`/${ROLES.startup}`}>
        <Switch>
            <Route path='/' component={Form} />
        </Switch>
    </Router>;
}