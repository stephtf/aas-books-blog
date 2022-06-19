import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesTabComponent } from './recipes-tab/recipes-tab.component';
import { ShoppingListTabComponent } from './shopping-list-tab/shopping-list-tab.component';
import { RecipesListComponent } from './recipes-tab/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes-tab/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes-tab/recipes-detail/recipes-detail.component';
import { ShoppingListEditComponent } from './shopping-list-tab/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './shopping-list-tab/ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesTabComponent,
    ShoppingListTabComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailComponent,
    ShoppingListEditComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
