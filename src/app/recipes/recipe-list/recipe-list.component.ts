import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UntilDestroy } from '@ngneat/until-destroy';
import { Recipe } from '@recipes/models/recipe.model';
import { RecipeService } from '@recipes/services/recipe.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes$: Observable<Recipe[]> = this.createRecipesObservable();

  constructor(private recipeService: RecipeService) {}

  createRecipesObservable() {
    return this.recipeService.recipesChanged;
  }
}
