import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { User } from '../../../auth/models';
import { Recipe } from '../../../recipes/Models/recipe.model';
import { DataStorageService } from '../../services/data-storage.service';
import { AuthService } from './../../../auth/services/auth.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.css',
})
export class SharedHeaderComponent implements OnInit {
  isCollapsed = true;
  isAuthenticated = false;

  recipes$: Observable<Recipe[]> = this.createRecipesObservable();
  user$: Observable<User> = this.createUserObservable();

  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {
    this.recipes$.subscribe();
  }

  ngOnInit(): void {
    this.user$.subscribe({
      next: (user) => {
        this.isAuthenticated = !!user;
      },
    });
  }

  onSaveData() {
    this.dataStorage.storeRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }
  onLogout(): void {
    this.authService.logout();
  }

  createUserObservable() {
    return this.authService.user;
  }

  createRecipesObservable() {
    return this.dataStorage.fetchRecipes();
  }
}
