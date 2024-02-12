import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { ShoppingModule } from './shopping-list/shopping.module';

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
