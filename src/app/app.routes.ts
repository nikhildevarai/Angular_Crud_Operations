import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './account/register.component';
import { LoginComponent } from './account/login.component';
import { authGuard } from './_helpers';

const usersRoutes = () => import('./users/users.routes').then(x => x.USERS_ROUTES);

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] }, 
  { path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
  { path: 'account/login', component: LoginComponent},
  { path: 'account/register', component: RegisterComponent},

  { path: '**', redirectTo: ''}
];

