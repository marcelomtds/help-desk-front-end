import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/security/auth.guard';
import { LoginComponent } from './components/security/login/login.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'user-new', component: UserNewComponent },
    { path: 'user-new/:id', component: UserNewComponent },
    { path: 'user-list', component: UserListComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);