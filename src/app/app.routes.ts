import { Routes } from '@angular/router';
import { HomeComponent, AnotherRouteComponent } from './routable-components';

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
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
