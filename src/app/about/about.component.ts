import { Component, OnInit } from '@angular/core';
import { MediumService } from './medium.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  posts: any[] = []; 

  constructor(private mediumService: MediumService) { }

  ngOnInit(): void {
    this.mediumService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
