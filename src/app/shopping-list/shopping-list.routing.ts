import { RouterModule, Routes } from '@angular/router';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

const routes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [{ path: ':id/edit', component: ShoppingEditComponent }],
  },
];

export const ShoppingListRoutes = RouterModule.forChild(routes);
