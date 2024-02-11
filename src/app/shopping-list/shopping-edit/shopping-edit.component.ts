import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  constructor(private slService: ShoppingListService) {}

  onAddItem(form: NgForm) {
    const value = form.value;

    const ingredient = new Ingredient(value.name, value.amount);

    this.slService.addIngredient(ingredient);
  }
}
