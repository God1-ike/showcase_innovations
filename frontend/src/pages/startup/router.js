import { Router, Route, Redirect } from 'wouter';
import { ROLES } from '../../constants';

export function StartupRouter () {
    return <Router base={`/${ROLES.startup}`}>
        <Redirect to='/new'/>
        <Route path='/new'>новая формочка</Route>
    </Router>;
}