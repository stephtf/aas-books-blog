import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ("Pinoy Spaghetti", "A Filipino version of a classic Italian American dish", "https://www.kawalingpinoy.com/filipino-style-spaghetti/" )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
