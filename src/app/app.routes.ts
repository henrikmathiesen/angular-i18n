import { Routes } from '@angular/router';
import { 
    HomeComponent, 
    AnotherRouteComponent, 
    SignalInputsComponent,
    SignalAdvancedComponent,
    I18NComponent
} from './routable-components';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'another-route',
        component: AnotherRouteComponent
    },
    {
        path: 'signal-inputs',
        component: SignalInputsComponent
    },
    {
        path: 'signal-advanced',
        component: SignalAdvancedComponent
    },
    {
        path: 'i18n',
        component: I18NComponent
    },
    {
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
