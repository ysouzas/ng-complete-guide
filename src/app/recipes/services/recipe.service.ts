import { ShoppingListService } from './../../shopping-list/services/shopping-list.service';
import { Ingredient } from './../../shared/models/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../Models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test1e',
      'Teste',
      'https://www.allrecipes.com/thmb/bxtenUUpvdz5cbM-4OOaYsLVleM=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/55803_PumpkinPancakes3x1photobychibichef-93bd97aff5f0429783b4ea3a74857be4.jpg',
      [
        new Ingredient('asddasasd', 5),
        new Ingredient('asddasa22sd', 9),
        new Ingredient('asdda22sasd', 6),
      ]
    ),
    new Recipe(
      'Test2e',
      'Teste',
      'https://www.allrecipes.com/thmb/bxtenUUpvdz5cbM-4OOaYsLVleM=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/55803_PumpkinPancakes3x1photobychibichef-93bd97aff5f0429783b4ea3a74857be4.jpg',
      [
        new Ingredient('asddasasd', 5),
        new Ingredient('asddasa22sd', 9),
        new Ingredient('asdda22sasd', 6),
      ]
    ),
    new Recipe(
      'Teste3',
      'Teste',
      'https://www.allrecipes.com/thmb/bxtenUUpvdz5cbM-4OOaYsLVleM=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/55803_PumpkinPancakes3x1photobychibichef-93bd97aff5f0429783b4ea3a74857be4.jpg',
      [
        new Ingredient('asddasasd', 5),
        new Ingredient('asddasa22sd', 9),
        new Ingredient('asdda22sasd', 6),
      ]
    ),
  ];

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes.slice()[id];
  }

  AddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}