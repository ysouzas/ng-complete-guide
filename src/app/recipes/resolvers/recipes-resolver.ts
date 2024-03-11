import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { Recipe } from '../Models/recipe.model';

export const RecipeResolver: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(DataStorageService).fetchRecipes();
};
