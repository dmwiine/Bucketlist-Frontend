import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BucketlistComponent } from './components/bucketlist/bucketlist.component';
import { ItemComponent } from './components/item/item.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'bucketlist',
        component: BucketlistComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'item',
        component: ItemComponent,
        canActivate: [AuthGuard]
    }
];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

