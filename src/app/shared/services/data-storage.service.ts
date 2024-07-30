import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { tap } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { Recipe } from '../../recipes/models/recipe.model';
import { RecipeService } from '../../recipes/services/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(`${environment.apiUrl}/recipes.json`, recipes)
      .subscribe((res) => console.log(res));
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes.json`).pipe(
      tap((res) => {
        return this.recipeService.setRecipes(res);
      })
    );
  }
}
