import { Router, Route, Redirect } from 'wouter';
import { ROLES } from '../../constants';

export function ManagerRouter () {
    return <Router base={`/${ROLES.manager}`}>
        <Route path='/new'>manager</Route>
    </Router>;
}