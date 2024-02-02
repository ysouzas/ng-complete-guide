import { Component } from '@angular/core';
import { Recipe } from './Models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  issue = IssuedProv.BC;
  public StateEnum = IssuedProv;
}

export enum IssuedProv {
  NB = 'NB',
  BC = 'BC',
}
