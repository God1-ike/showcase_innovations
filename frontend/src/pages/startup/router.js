import { Route } from 'wouter';
import { ROLES } from '../../constants';
import { StartupForm } from './form';
import { SuccessForm } from './success-form';

export function StartupRouter () {
    return <>
        <Route path={`/${ROLES.startup}`} component={StartupForm} />
        <Route path={`/${ROLES.startup}/success-send`} component={SuccessForm} />
    </>;
}

