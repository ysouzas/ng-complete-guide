import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Recipe } from '../../recipes/Models/recipe.model';
import { RecipeService } from '../../recipes/services/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(`${environment.apiUrl}/recipes.json`, recipes)
      .subscribe((res) => console.log(res));
  }

  fetchRecipes() {
    debugger;
    this.http
      .get<Recipe[]>(`${environment.apiUrl}/recipes.json`)
      .subscribe((res) => {
        debugger;
        return this.recipeService.setRecipes(res);
      });
  }
}
