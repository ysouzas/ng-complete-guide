import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutes } from './shopping-list.routing';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [CommonModule, FormsModule, ShoppingListRoutes],
  exports: [ShoppingListComponent, ShoppingEditComponent],
})
export class ShoppingModule {}
