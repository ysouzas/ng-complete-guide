import { Ingredient } from './../shared/models/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();

    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]): void => {
        this.ingredients = ingredients;
      }
    );
  }
}
