import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '@recipes/models/recipe.model';
import { DataStorageService } from '@shared/services/data-storage.service';

export const RecipeResolver: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(DataStorageService).fetchRecipes();
};
