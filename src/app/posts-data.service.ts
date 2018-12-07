import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class PostsDataService {
  private posts: any[] = [
    {
      id: 1,
      title: "Mon premier post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt fermentum dui, sed accumsan arcu mattis aliquam. Nam hendrerit odio libero, sed laoreet tortor facilisis et. Mauris quis interdum tortor."
    },
    {
      id: 2,
      title: "Mon deuxième post",
      content:
        "Duis eget nisl ut urna varius facilisis eu in tortor. Phasellus non porta augue."
    },
    {
      id: 3,
      title: "Mon troisième post",
      content:
        "Pellentesque aliquet tellus id nisi vestibulum, eget tempor velit maximus. Aenean mollis ante nibh, non aliquet elit euismod in."
    },
    {
      id: 4,
      title: "Mon quatrième post",
      content:
        "Piur finir mon quatrième Phasellus tincidunt fermentum dui, sed accumsan arcu mattis aliquam. Nam hendrerit odio libero."
    }
  ];

  constructor() {}

  fetchData() {
    return this.posts;
  }
}
