import { Component, OnInit } from '@angular/core';
import { PostsDataService } from './posts-data.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [PostsDataService]
})
export class AppComponent implements OnInit {
  title = "blog";
  private posts: any[];

  constructor(private PostsDataService: PostsDataService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.posts = this.PostsDataService.fetchData();
  }
}
