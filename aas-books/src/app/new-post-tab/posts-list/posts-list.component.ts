import { Component, OnInit } from '@angular/core';
import { Post } from '../posts.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [
    new Post ("Pinoy Spaghetti", "A Filipino version of a classic Italian American dish", "https://www.goya.com/media/4173/creole-spaghetti.jpg?width=470https://www.kawalingpinoy.com/filipino-style-spaghetti/" )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
