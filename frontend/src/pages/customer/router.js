import { Router, Route, Redirect } from 'wouter';
import { ROLES } from '../../constants';

export function CustomerRouter () {
    return <Router base={`/${ROLES.customer}`}>
        <Route path='/'>customer</Route>
    </Router>;
}