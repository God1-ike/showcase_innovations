import { Route } from 'wouter';
import { ROLES } from '../../constants';
import { StartupForm } from './form';
import { SuccessForm } from './success-form';
import { StartupDetails } from './details'

export function StartupRouter () {
    return <>
        <Route path={`/${ROLES.startup}`} component={StartupForm} />
        <Route path={`/${ROLES.startup}/success-send`} component={SuccessForm} />
        <Route path={`/${ROLES.startup}/details-page`} component={StartupDetails} />
    </>;
}

