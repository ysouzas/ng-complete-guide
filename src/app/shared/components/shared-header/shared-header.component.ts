import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../../recipes/Models/recipe.model';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.css',
})
export class SharedHeaderComponent {
  isCollapsed = true;
  recipes$: Observable<Recipe[]> = this.createRecipesObservable();

  constructor(private dataStorage: DataStorageService) {
    this.recipes$.subscribe();
  }

  onSaveData() {
    this.dataStorage.storeRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes();
  }

  createRecipesObservable() {
    return this.dataStorage.fetchRecipes();
  }
}
