import { Component, OnInit } from '@angular/core';
import { PostsDataService } from "../posts-data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [PostsDataService]
})
export class DashboardComponent implements OnInit {
  private posts: any[];

  constructor(private postsDataService: PostsDataService) {}

  ngOnInit() {
    this.posts = this.postsDataService.fetchData();
  }
}
