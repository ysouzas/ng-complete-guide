import { Component } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrl: './shared-header.component.css',
})
export class SharedHeaderComponent {
  isCollapsed = true;

  constructor(private dataStorage: DataStorageService) {}

  onSaveData() {
    this.dataStorage.storeRecipes();
  }

  onFetchData() {
    debugger;
    this.dataStorage.fetchRecipes();
  }
}
