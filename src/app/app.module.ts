import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbNavModule,
    SharedModule,
    RecipesModule,
    ShoppingModule,
    AppRoutes,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
