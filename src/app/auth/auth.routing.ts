import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [{ path: 'auth', component: AuthComponent }];

export const AuthRoutes = RouterModule.forChild(routes);
