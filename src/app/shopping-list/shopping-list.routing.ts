import { ShoppingListComponent } from './shopping-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
];

export const ShoppingListRoutes = RouterModule.forChild(routes);
